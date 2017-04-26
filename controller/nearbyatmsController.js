'use strick';
// create the controller and inject Angular's $scope
	citiApp.controller('nearbyatmsController', ['$scope','cardlistService','$route',function($scope,cardlistService,$route) {

        $scope.address="";
		$scope.radius="";
        $scope.radiuslist = [1000,2000,3000,4000,5000];
	
	
		$scope.searchatm=function(radious,address){
			alert(" Am here "+radious+address);
		cardlistService.nearbyatms(radious,address).success(function(data) {
			$scope.nearbyatmslist=data;
			console.log("return data ");
			console.log($scope.nearbyatmslist);
		});	
			
		};
	     

	}]);

	