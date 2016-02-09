/*angular.module( "myFirstApp", ["ngRoute"] )
	.config( ["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$routeProvider.when("/about/:parm1", {
			templateUrl: "views/about.html",
			controller: "AboutCtrl"
		})
		.when( "/contact/:parm1", {
			templateUrl: "views/contact.html",
			controller: "ContactCtrl"
		} )
		.otherwise( {
			redirectTo: "/"
		} )
		$locationProvider.html5Mode(true);
	}] )
	.factory( "personService", function () {
	
		var person = {};

		person.printName = function ( firstName, lastname ) {
			return firstName + " " + lastname;
		};
		return person;
	} )*/


angular.module('eventApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider.when('/add-event', {
				templateUrl: 'views/add-event.html',
				controller: "formCtrl"
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);

	}]);