(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.directive('projects', [function() {
		return {
			restrict: 'E',
			scope: {
				projects: '='
			},
			templateUrl: 'directives/projects/projects.html'
		};
	}]);
})();