angular
	.module("jogOnTimesApp", ["ui.router"])
	.config(MainRouter);

	function MainRouter($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('login', {
			url: '/',
			templateUrl: 'login.html'
		})

		.state('setup', {
			url: '/setup',
			templateUrl: 'setup.html'
		})

		.state('quiz', {
			url: '/quiz',
			templateUrl: 'quiz.html'
		})

	}
