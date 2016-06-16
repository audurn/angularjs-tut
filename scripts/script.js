var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope){
	var employees = [
			{name: "Ben", gender: 1, city: "London" },
			{name: "Sara", gender: 2, city: "Paris"},
			{name: "Mark", gender: 1, city: "California" },
			{name: "Pam", gender: 2, city: "Frankfurt" },
			{name: "Todd", gender: 3, city: "Silicon Valley" }
	];
	$scope.employees = employees;
});
				
