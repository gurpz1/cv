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

	    	// Enable browser color
		    $mdThemingProvider.enableBrowserColor({
		      theme: 'default',
		      palette: 'blue',
		      hue: '700' // Default is '800'
		    });

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