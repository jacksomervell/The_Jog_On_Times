angular
	.module("jogOnTimesApp")
	.controller("LocalStorageController", LocalStorageController);

	function LocalStorageController() {
		var self = this;

		self.name = '';
		self.jogOnApp = [];

		this.saveName = function() {

	
			console.log(self.name)
			
			var object = { name: self.name };

			self.jogOnApp = JSON.parse(localStorage.getItem('jogOnApp'));

			if (!self.jogOnApp) {self.jogOnApp = []}

			self.jogOnApp.push(object);

			localStorage.setItem('jogOnApp', JSON.stringify(self.jogOnApp));

		}


	}