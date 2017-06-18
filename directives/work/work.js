(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.directive('work', [function() {
		return {
			restrict: 'E',
			scope: {
				work: '='
			},
			templateUrl: 'directives/work/work.html'
		};
	}]);
})();