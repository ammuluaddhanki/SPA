// create the controller and inject Angular's $scope
	citiApp.controller('mainController', function($scope) {
	 
			// create a message to display in our view		 
		$scope.message = 'Everyone come and see how good I look!';
	});

	//citiApp.filter('ucfirst', function() {
	//return function(input,arg) {
		//return input.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	//};
//});