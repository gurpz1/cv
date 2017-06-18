(function() {
	'use strict';
	
	angular.module('gurpal-sagoo',[
		'ngMessages',
		'ngAnimate',
		'ngAria',
		'ngMaterial',
		'ngRoute',
		'app-templates'
	])
	.config([
		'$mdThemingProvider',
		'$logProvider',
		'$routeProvider',
		'$mdIconProvider',
		function($mdThemingProvider, $logProvider, $routeProvider,$mdIconProvider) {

			$mdThemingProvider.theme('default')
	    		.primaryPalette('indigo')
	    		.accentPalette('blue');

	    	$logProvider.debugEnabled = true;

	    	$routeProvider
	    	.when('/', {
	    		controller: 'homeCtrl'
	    	})
	    	.otherwise({
	    		redirectTo: '/'
	    	});

	    	$mdIconProvider
	    	.defaultIconSet('assets/mdi.svg', 24);
	}]);
})();