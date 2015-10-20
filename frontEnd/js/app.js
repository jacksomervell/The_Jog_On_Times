angular
	.module("jogOnTimesApp", ["ui.router"])
	.config(MainRouter);

	function MainRouter($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html'
		})

		.state('quiz', {
			url: '/quiz',
			templateUrl: 'quiz.html'
		})

	}
