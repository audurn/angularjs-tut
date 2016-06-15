var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope){
	//Example 1
	var employees = [
				{firstName : "Audumbar", lastName : "Nevarekar", gender : "male", salary : "25000"},
				{firstName : "Anniruddha", lastName : "Lanke", gender : "male", salary : "25000"},
				{firstName : "Pravin", lastName : "Chavan", gender : "male", salary : "25000"},
				{firstName : "Rohit", lastName : "Yadav", gender : "male", salary : "25000"},
				{firstName : "VIshal", lastName : "Bharadwaj", gender : "male", salary : "25000"}
	];
	$scope.employees = employees;

	//Example 2: Nested
	var countries = [
			{
				name: "India",
				cities: [ "Mumbai", "Pune", "Bengaluru" ]
			},
			{
				name: "USA",
				cities: [ "Washington D.C.", "Texas", "California" ]
			},
			{
				name: "UK",
				cities: [ "London", "Cardiff", "Birmingham" ]
			}
	];
	$scope.countries = countries;
});
				
