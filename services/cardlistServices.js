citiApp.factory('cardlistService', ['$http',function($http){
	var data = {};
	var headerinfo= {
        headers: { 'Content-Type': 'application/json',
		           'client_id':'ffe4d269-1c59-493b-94f4-fbca960bc0f0'}
        };

	// get the card details of particular account number
	data.cardlist = function(cardno){
 	// return $http.get('http://localhost:8888/cards/'+cardno) ;
        return $http.get('json/carddetail.json') ;
	};

	// Get the List of cards
	data.cardlisthome = function(){
	//return $http.get('http://localhost:8888/cards') ;
        return $http.get('json/cardlist.json') ;
			var postdata={
		"GBOF0003Operation":{
		"getRelationshipAcctReq":{
		"requestTerminalId":"00000000MX",
		"requestRelationshipNumber":"000000311703",
		"requestDateTime":"07132015120500",
		"requestMessageId":"0003",
		"requestUserId":"",
		"requestCustomerOrg":"322",
		"requestVersionNumber":15,
		"requestChannelInd":"ECL"
		}
		}
		};
		
	
	//return $http.post('https://sit.api.banamex.com/ccp/sit/v1/card/cardinfo/RelatedCardListInq',postdata,headerinfo);

    };

	// Perform the card blocking process
	data.blockcard=function(carddetails) {
		//console.log("Service call block details");
		//console.log(carddetails);
		return $http.post('http://localhost:8888/cards/'+carddetails.cardNumber+'/status',carddetails) ;
		
	};
		data.nearbyatms=function(radious,address) {
		console.log("Service call block details");
		console.log('http://localhost:8080/v1/banamex/atms/nearby?radius='+radious+'&address='+address);
		return $http.get('http://citibanamex-api-atm-locator.mybluemix.net/v1/banamex/atms/nearby?radius='+radious+'&address='+address) ;
				
	};
	
	
	console.log("Service data");
	console.log(data);
	return data;

}]);