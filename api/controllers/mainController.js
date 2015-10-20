var request = require('ajax-request');

function getNews(req, response){

  var start = req.params.year + '0101'
  var end = req.params.year + '1231'
  var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.params.category + '&begin_date='+ start +'&end_date='+ end +'&api-key=9ede21e2158225e76cdbaf38fcaf8bda%3A14%3A73258088'

  if(req.params.year && req.params.category) {

  request({
    url: url,
    method: 'GET',
    options:{json: true} 
  }, function(err, res, body) {

    var data = JSON.parse(body)
    var jsonResponse = []
    for(i=0; i < data.response.docs.length -1; i++ ){
      var headlineSplit = blankOutWord(data.response.docs[i].headline.main)
      var date = data.response.docs[i].pub_date
      date = date.split('')
      date = date.splice(0, 10)
      date = date.join('')
      console.log(date)

      var object = {
        headline: [headlineSplit.headLinePart1, headlineSplit.headLinePart2],
        blankWord: headlineSplit.blankWord,
        blankWordCharLength: headlineSplit.blankWordLength,
        category: req.params.category,
        year: req.params.year,
        date: date
      }

      jsonResponse.push(object)
    }

    response.json(jsonResponse)
  });
} else {
  console.log('validation error')
}

}


function blankOutWord(headline){
  var string = headline.replace (/[.,;,?!\s,]/g, " ");
  string = string.toUpperCase()
  string = string.split(' ')

  min = 0
  max = string.length
  var indexToSplit

  do {
    indexToSplit = Math.floor(Math.random() * (max - min) + min);

  } while (string[indexToSplit].length < 4)


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