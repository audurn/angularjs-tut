var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope){
	var employee = {
			firstName : "Audumbar",
			lastName : "Nevarekar",
			gender : "male"
	};
	$scope.employee = employee;
});
				
