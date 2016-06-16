var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope){
	var employees = [
			{name: "Ben", gender: "Male", salary: 55000.72, city: "London" },
			{name: "Sara", gender: "Female", salary: 61000.45, city: "Paris"},
			{name: "Mark", gender: "Male", salary: 70000.00, city: "California" },
			{name: "Pam", gender: "Male", salary: 75000.72, city: "Frankfurt" },
			{name: "Todd", gender: "Male", salary: 72000.444, city: "Silicon Valley" }
	];
	$scope.employees = employees;
});
				
