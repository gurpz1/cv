(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.directive('skills', [function() {
		return {
			restrict: 'E',
			scope: {
				skills: '='
			},
			templateUrl: 'directives/skills/skills.html'
		};
	}]);
})();