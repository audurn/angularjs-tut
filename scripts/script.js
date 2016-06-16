var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope){
	var employees = [
			{name: "Ben", dob: new Date("November 23, 1980"), gender: "Male", salary: 55000.72 },
			{name: "Sara", dob: new Date("May 05, 1970"), gender: "Female", salary: 61000.45 },
			{name: "Mark", dob: new Date("January 12, 1985"), gender: "Male", salary: 70000.00 },
			{name: "Pam", dob: new Date("September 19, 1986"), gender: "Male", salary: 75000.72 },
			{name: "Todd", dob: new Date("December 27, 1993"), gender: "Male", salary: 72000.444 }
	];
	$scope.employees = employees;
	$scope.length = employees.length;
	$scope.rowLimit = 3;
});
				
