angular.module( "myFirstApp", [] )
	.factory( "personService", function () {
	
		var person = {};

		person.printName = function ( firstName, lastname ) {
			return firstName + " " + lastname;
		};
		return person;
	} );
