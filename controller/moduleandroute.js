	// create the module and name it scotchApp
	var citiApp = angular.module('mycitiApp', ['ngRoute']);

	// configure our routes
	citiApp.config(function($routeProvider) {

		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'templates/cardhomepage.html',
				controller  : 'mainController'
			})
			.when('/cardlisthome', {
				templateUrl : 'templates/cardlisthome.html',
				controller  : 'cardlisthomeController'
			})
			.when('/cardlist/:cardid', {
				templateUrl : 'templates/cardlist.html',
				controller  : 'cardlistController'
			})
			.when('/card/:cardid/:status?', {
				templateUrl : 'templates/card.html',
				controller  : 'cardlistController'
			})
			.when('/nearbyatms', {
				templateUrl : 'templates/nearbyatms.html',
				controller  : 'nearbyatmsController'
			});

			/* route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});*/
	});


    var windowHeight = $(window).height();
    var setWrapperHeight = (windowHeight)-90;
    $(".wrapper").css("height", setWrapperHeight);

    $(".qa").click(function(){
        $(".ans").hide();
        $(this).find(".ans").show();
    });
