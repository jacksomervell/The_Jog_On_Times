angular
	.module("jogOnTimesApp")
	.controller("HeadlineController", HeadlineController);

	HeadlineController.$inject = ["$http"];

	function HeadlineController($http) {
		var self = this;
    self.year = ''
    self.category =''

		// self.all = [];
		self.getHeadlines = []
		// self.getHeadlines =     [{
  //       "headline": ["Cat Found", "Up Tree"],
  //       "blankWord": "Stuck",
  //       "blankWordCharLength": 5
  //   },
  //   {
  //       "headline": ["Jack Found", "Up Tree"],
  //       "blankWord": "Laughing",
  //       "blankWordCharLength": 8
  //   },
  //    {
  //       "headline": ["Josh Found", "Up Tree"],
  //       "blankWord": "Laughing",
  //       "blankWordCharLength": 8
  //   },
  //    {
  //       "headline": ["Niall Found", "Up Tree"],
  //       "blankWord": "Laughing",
  //       "blankWordCharLength": 8
  //   },
  //    {
  //       "headline": ["Caryll Found", "Up Tree"],
  //       "blankWord": "Laughing",
  //       "blankWordCharLength": 8
  //   }];

		// getHeadlines();

		this.getData = function() {

		 $http
      .get('http://localhost:3000/news/' + self.year + '/' + self.category)
      .then(function(response){
        self.getHeadlines = response.data;
        console.log(response.data)
    	});
  	}
	}