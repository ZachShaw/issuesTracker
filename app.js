angular.module('issueApp', [])

.service('service', function($http) {
	var promise;
	var jsonData = {
		get: function() {
			if ( !promise ) {
				var promise = $http.get('https://gist.githubusercontent.com/nnnick/d95eda665f92a0f8c55c/raw/e5045e9e37f0ef2429c74467d513e3964d33878c/issues.json')
				.success(function(response) {
					return response.data;
				});
					return promise;
			}
		}
	};
	return jsonData;
})

.controller('mainController', function(service, $scope) {
	$scope.sortType = 'id'; // set the default sort type
	$scope.sortReverse = false; // set the default sort order
	$scope.searchAssignee = ''; // set the default search/filter term

	service.get()
		.then(function(d) {
			$scope.issues = d.data
		})

	$scope.filterByClick = function(param) {
		$scope.filterParam = param;
			if ($scope.filterParam === null) {
				$scope.filterParam = '';
			}
	};

	$scope.clearFilter = function() {
		if ($scope.filterParam) {
			$scope.filterParam = '';
		}
	};
	$scope.clearSearch = function() {
	 if ($scope.searchParam) {
		 $scope.searchParam = '';
		}
	};
});
