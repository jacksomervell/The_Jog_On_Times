angular
	.module("jogOnTimesApp")
	.controller("HeadlineController", HeadlineController);

	HeadlineController.$inject = ["$http"];

	function HeadlineController($http) {
		var self = this;
    self.year = ''
    self.category =''

    self.jogOnApp = []

    self.answer = ''

    var score = 0;
    var currentQuestion = 0;
		self.getHeadlines = []

		this.getData = function() {

		 $http
      .get('http://localhost:3000/news/' + self.year + '/' + self.category)
      .then(function(response){
        self.getHeadlines = response.data;
        console.log(response.data)
    	});
  	}
  	this.saveSetup = function() {

			self.jogOnApp = JSON.parse(localStorage.getItem('jogOnApp'));
			var index = self.jogOnApp.length -1
			self.jogOnApp[index].year = self.year
			self.jogOnApp[index].category = self.category
			console.log(self.jogOnApp[index])
			console.log('clicked');
		}
    this.updateScore = function() {
    	console.log('hello!');
      if (self.answer === self.getHeadlines[currentQuestion].blankWord) {
        score = score + 1;
        console.log(self.getHeadlines[currentQuestion].blankWord);
        console.log('Correct so score is now ' + score);
      }
      else {
        console.log(self.getHeadlines[currentQuestion].blankWord);
        console.log('Wrong so score is still ' + score);

      }

      currentQuestion = currentQuestion + 1;
      self.answer = '';
    }
	}

