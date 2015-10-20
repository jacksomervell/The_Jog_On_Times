var request = require('ajax-request');

function getNews(req, response){

  var start = req.params.year + '0101'
  var end = req.params.year + '1231'
  var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.params.category + '&begin_date='+ start +'&end_date='+ end +'&api-key=9ede21e2158225e76cdbaf38fcaf8bda%3A14%3A73258088'

  request({
    url: url,
    method: 'GET',
    options:{json: true} 
  }, function(err, res, body) {

    var data = JSON.parse(body)
    var jsonResponse = []

    for(i=0; i < data.response.docs.length -1; i++ ){

      var headlineSplit = blankOutWord(data.response.docs[i].headline.main)
// data.response.docs[i].headline.main

      var object = {
        headline: [headlineSplit.headLinePart1, headlineSplit.headLinePart2],
        blankWord: headlineSplit.blankWord,
        blankWordCharLength: headlineSplit.blankWordLength,
        category: req.params.category,
        year: req.params.year
      }

      jsonResponse.push(object)
    }


    // response.json(data.response.docs[0])
    response.json(jsonResponse)
  });


}


function blankOutWord(headline){
  var string = headline.split(' ')

  min = 0
  max = string.length
  var indexToSplit = Math.floor(Math.random() * (max - min) + min);

  console.log(string[indexToSplit])
  var first = string.slice(0, indexToSplit).join(' ');
  var second = string.slice(indexToSplit + 1).join(' ');

  // console.log(first)
  // console.log(second)

  var response = {
    headLinePart1: first,
    headLinePart2: second,
    blankWord: string[indexToSplit],
    blankWordLength: string[indexToSplit].length
  }

  return response

}















module.exports = {
  getNews: getNews
}