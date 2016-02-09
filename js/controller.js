/*var app = angular.module( "myFirstApp", [] );
app.controller( "ParentCtrl", function () {
	var Prt = this;
	Prt.name = "John";
} );
app.controller( "SonCtrl", function () {
	var Son = this;
	Son.name = "Sam";
} );*/

/*angular.module("myFirstApp")
	.controller("myController", ["$scope", "personService", function($scope, personService) {
		$scope.firstName = "Trainee";
		$scope.lastName = "Aleks";

		$scope.printName = function() {
			return personService.printName($scope.firstName, $scope.lastName);
		}
	}])
	.controller("AboutCtrl", ['$scope', '$routeParams', function($scope, $routeParams) {
		$scope.input = $routeParams.parm1;
	}])
	.controller("ContactCtrl", ['$scope', '$routeParams', function($scope, $routeParams) {
		$scope.input = $routeParams.parm1;
	}])*/


/*angular.module( "eventApp" )
	.controller( "formCtrl", [ "eventFactory", function ( eventFactory ) {
		this.event = eventFactory.getAllEvents();

		this.submitForm = function ( form ) {
			//this.event.push( angular.copy( form ) );
			eventFactory.createEvent( angular.copy( form ), this.event );
			console.log( this.event );
		};
	}] );*/

angular.module( "eventApp" )
	.controller( "formCtrl", [ "eventFactory", function ( eventFactory ) {
		this.event = eventFactory.getAllEvents();

		this.numberList = [ 14, 14, 20, 1, 45, 16, 24 ];

		this.events = [];
		this.events = [{id:1, name:"event1"}, {id:2, name: "event2"}];

		this.submitForm = function ( form ) {
			//this.event.push( angular.copy( form ) );
			eventFactory.createEvent( angular.copy( form ), this.event );
			
		};
	}] );