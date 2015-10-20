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

    self.score = 0;
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
			localStorage.setItem('jogOnApp', JSON.stringify(self.jogOnApp))		
      this.score = 0	

		}
    this.updateScore = function() {
    	console.log('hello!');
      if (self.answer === self.getHeadlines[currentQuestion].blankWord) {
        self.score = self.score + 1;
        console.log(self.getHeadlines[0].blankWord);
        console.log('Correct so score is now ' + self.score);
      }
      else {
        console.log(self.getHeadlines[currentQuestion].blankWord);
        console.log('Wrong so score is still ' + self.score);
      }

      currentQuestion = currentQuestion + 1;
    
			self.jogOnApp = JSON.parse(localStorage.getItem('jogOnApp'));
			var index = self.jogOnApp.length -1
			self.jogOnApp[index].score = self.score
			console.log(self.jogOnApp[index])
			localStorage.setItem('jogOnApp', JSON.stringify(self.jogOnApp))	

    }

    this.getScores = function() {
    	this.allScores = JSON.parse(localStorage.getItem('jogOnApp'));
    }

    this.resetValues = function() {
      location.reload()
			this.year = '';
			this.category = '';
		}

    this.clearAnswer = function(){
      self.answer = ''
    }

 	}

