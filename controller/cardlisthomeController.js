'use strick';
// create the controller and inject Angular's $scope
	citiApp.controller('cardlisthomeController', ['$scope','cardlistService','$route',function($scope,cardlistService,$route) {



        // create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		cardlistService.cardlisthome().success(function(data) {
			$scope.carlistdata=data.GBOF0003OperationResponse.getRelationshipAcctRes.accountInfoTable;
			console.log("return data detail ");
			console.log();
		});
	
		
	     $scope.blockcard=function(cardid){
	     	alert("Need to make HTTP call for blocking this "+ cardid + " Card");
	     };

	}]);

	