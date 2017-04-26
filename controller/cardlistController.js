'use strick';
// create the controller and inject Angular's $scope
citiApp.controller('cardlistController', ['$scope','cardlistService','$routeParams','$filter','$location','$interval',
    function($scope,cardlistService,$routeParams,$filter,$location,$interval) {

       $scope.showtap=false;
        $(document).ready(function(){
            $(window).scrollTop(0);
        });

        $scope.$on('$destroy', function() {
            // Make sure that the interval is destroyed too
            $scope.stopFight();
        });


        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        // create a message to display in our view


        console.log("URL details");
        var cardno = $routeParams.cardid;
        $scope.cardstatus="";
        if($routeParams.status!== undefined) {

            $scope.cardstatus=$routeParams.status;// cardactivated carddeactivated
            console.log( "card no status "+ $scope.cardstatus);
        }


		cardlistService.cardlist(cardno).success(function(data) {
            $scope.carlistdata=data;
            $scope.embosserName = "";
            $scope.responseCardNumber = "";
            $scope.currentBalance = "";
            $scope.cardType = "";
            $scope.cardStatus = "";
            $scope.cardCashLimit = "";
            $scope.lastPaymentDate = "";
            $scope.thankYouPoints = "";
            $scope.minimumPaymentDueDate = "";


            console.log("JSON data 123");

            console.log($scope.carlistdata);
           // angular.forEach($scope.carlistdata, function (carlistdataitem, key) {
			   var carlistdataitem = $scope.carlistdata;
	//alert(carlistdataitem.cardNumber + cardno);
                if (carlistdataitem.cardNumber == cardno) {
				
                    $scope.embosserName = carlistdataitem.embosserName;
                    $scope.responseCardNumber = carlistdataitem.cardNumber;
                    $scope.currentBalance = carlistdataitem.currentBalance;
                    switch (carlistdataitem.cardType) {
                        case 'S':
                            $scope.cardType = "Signature";
                            break;
                        case 'P':
                            $scope.cardType = "Platinum";
                            break;
                        default:

                    }

                    if(carlistdataitem.cardStatus==1) {
                        $scope.cardStatus=true;
                    }else{
                        $scope.cardStatus=false;
                    }
                    //$scope.cardStatus = carlistdataitem.cardStatus;
                    $scope.cardCashLimit = carlistdataitem.cardCashLimit;
                    var mindate = carlistdataitem.lastPaymentDate;
                    $scope.lastPaymentDate = mindate.substring(0, 2) + '/' + mindate.substring(2, 4) + '/' + mindate.substring(4, 8);
                    $scope.thankYouPoints = carlistdataitem.thankYouPoints;

                    var mindate = carlistdataitem.minimumPaymentDueDate;
                    var formatteddate = mindate.substring(0, 2) + "/" + mindate.substring(2, 4) + "/" + mindate.substring(4, 8);
                    $scope.minimumPaymentDueDate = formatteddate;
                    $scope.minimumPaymentAmt = carlistdataitem.minimumPaymentAmt;
                    $scope.balOfLastStmt = carlistdataitem.balOfLastStmt;

                }
            $scope.showtap=true;
          //  });
        });

        $scope.blockcard=function(cardid,cardstatus){


            var cardtextstatus="";
            if(cardstatus){
                cardtextstatus="cardactivated";
            }else {
                cardtextstatus="carddeactivated";
            }
            var stop = $interval(function () {
                $location.path("/card/"+cardid+"/"+cardtextstatus);
                $interval.cancel(stop);
            }, 1000);


            var postdata={
                "blockCode":"L",
                "cardNumber":cardid,
                "reasonCode":"01",
                "requestFlag":"B"
            };
            console.log("Card block post data");
            console.log(postdata);
        };

    }]);




// 'use strick';
// // create the controller and inject Angular's $scope
// citiApp.controller('cardlistController', ['$scope','cardlistService','$routeParams',function($scope,cardlistService,$routeParams) {
//
//     // create a message to display in our view
//     $scope.message = 'Everyone come and see how good I look!';
//     // create a message to display in our view
//
//
//     console.log("URL details");
//     var cardno = $routeParams.cardid;
//     console.log(cardno);
// 	$scope.embosserName="";
// 	$scope.responseCardNumber="";
// 	$scope.currentBalance="";
// 	$scope.cardType="";
// 	$scope.cardStatus="";
// 	$scope.cardCashLimit="";
// 	$scope.lastPaymentDate="";
// 	$scope.thankYouPoints="";
//
//     cardlistService.cardlist().success(function(data) {
//           $scope.carlistdata=data;
//
// 			console.log($scope.carlistdata);
// 			angular.forEach($scope.carlistdata, function(carlistdataitem, key) {
//
// 			console.log(carlistdataitem.responseCardNumber + "JSON data 444  -- " +cardno);
//
// 				if(carlistdataitem.responseCardNumber==cardno) {
// 					$scope.embosserName=carlistdataitem.embosserName;
// 					$scope.responseCardNumber=carlistdataitem.responseCardNumber;
// 					$scope.currentBalance=carlistdataitem.currentBalance;
// 					switch (carlistdataitem.cardType) {
// 						case 'S':
// 							$scope.cardType="Signature";
// 							break;
// 						case 'M':
// 							$scope.cardType="Master";
// 							break;
// 						default:
// 							$scope.cardType="Visa";
// 					}
//
//
// 					$scope.cardStatus=carlistdataitem.cardStatus;
// 					$scope.cardCashLimit=carlistdataitem.cardCashLimit;
// 					$scope.lastPaymentDate=carlistdataitem.lastPaymentDate;
// 					$scope.thankYouPoints=carlistdataitem.thankYouPoints;
//
// 				}
// 			});
// 	 });
//
//     $scope.blockcard=function(cardid){
//         alert("Need to make HTTP call for blocking this "+ cardid + " Card");
//     };
//
// }]);
//
