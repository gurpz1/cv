(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.controller('homeCtrl', [
		'$scope',
		'$log',
		"api",
		function($scope, $log, api) {
			$log.debug("Loaded homeCtrl");

			api.getCV().then(function(data) {
				$scope.cv = data.data;
			});

		}]);

})();