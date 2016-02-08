angular.module( "myFirstApp", ["ngRoute"] )
	.config( ["$routeProvider", function ($routeProvider) {
		$routeProvider.when("/about", {
			templateUrl: "view/about.html"
		})
		.when( "/contact", {
			templateUrl: "view/contact.html"
		} )
		.otherwise( {
			templateUrl: "view/404.html"
		} );
	}] )
	.factory( "personService", function () {
	
		var person = {};

		person.printName = function ( firstName, lastname ) {
			return firstName + " " + lastname;
		};
		return person;
	} );
