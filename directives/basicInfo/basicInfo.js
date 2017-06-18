(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.directive('basicInfo', [function() {
		return {
			restrict: 'E',
			scope: {
				profile: '='
			},
			templateUrl: 'directives/basicInfo/basicInfo.html'
		};
	}]);
})();