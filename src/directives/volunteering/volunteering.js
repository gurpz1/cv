(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.directive('volunteering', [function() {
		return {
			restrict: 'E',
			scope: {
				volunteer: '='
			},
			templateUrl: 'directives/volunteering/volunteering.html'
		};
	}]);
})();