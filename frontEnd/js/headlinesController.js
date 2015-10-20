angular
	.module("jogOnTimesApp")
	.controller("HeadlineController", HeadlineController);

	HeadlineController.$inject = ["$http"];

	function HeadlineController($http) {
		var self = this;
    self.year = ''
    self.category =''
    self.answer = ''

    var score = 0;

		self.getHeadlines = []
    
		this.getData = function() {

		 $http
      .get('http://localhost:3000/news/' + self.year + '/' + self.category)
      .then(function(response){
        self.getHeadlines = response.data;
        console.log(response.data)
    	});
  	}

    this.updateScore = function() {
      if (self.answer === self.getHeadlines[0].blankWord) {
        score = score + 1;
      console.log(self.getHeadlines[0].blankWord);
      console.log('Correct so score is ' + score);
      }
      else {
      score = score + 1;
      console.log(self.getHeadlines[0].blankWord);
      console.log('Wrong so score is ' + score);

      }
    }
  }


// score starts at 0
// if user input is same as blankWord in controllers/mainController
//   then score +1

// score rendered on score page and stored in localStorage

