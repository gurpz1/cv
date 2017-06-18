(function() {
	'use strict';

	angular.module('gurpal-sagoo')
	.factory('api', [
		'$http',
		'$log',
		function($http, $log) {
			var getURI = function(uri) {
				var baseUrl = '';
				var url = baseUrl + uri;
				$log.debug("Fetching: " + uri);
				return $http({
					method: 'GET',
					url:  url,
					cache: false
				});
			};

			return {
				getCV: function() {
					return getURI('assets/resume.json');
				}
			};

	}]);
})();