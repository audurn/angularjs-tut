var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope){
	var country = {
			name : "India",
			capital : "New Delhi",
			flag : "./images/indian-flag.png"
	};
	$scope.country = country;
});
				
