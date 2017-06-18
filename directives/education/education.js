(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.directive('education', [function() {
		return {
			restrict: 'E',
			scope: {
				education: '='
			},
			templateUrl: 'directives/education/education.html'
		};
	}]);
})();