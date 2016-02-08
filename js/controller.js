/*var app = angular.module( "myFirstApp", [] );
app.controller( "ParentCtrl", function () {
	var Prt = this;
	Prt.name = "John";
} );
app.controller( "SonCtrl", function () {
	var Son = this;
	Son.name = "Sam";
} );*/

angular.module("myFirstApp")
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
	}])