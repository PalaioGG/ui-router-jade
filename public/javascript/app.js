var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'main',
			controller: 'mainCtrl'
		})

		.state('linkone', {
			url: '/linkone',
			templateUrl: 'linkone'
		})

		.state('linktwo', {
			url: '/linktwo',
			templateUrl: 'linktwo'
		})
});

app.directive('myNavbar', function() {
	return {
		restrict: 'EA',
		templateUrl: "/navbar"
	};
});

app.directive('myFooter', function() {
	return {
		restrict: 'EA',
		templateUrl: "/footer"
	};
});