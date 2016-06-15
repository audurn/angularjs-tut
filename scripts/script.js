var myApp = angular
				.module("myModule", [])
				.controller('myController', function($scope){
	var technologies = [
			{name:"Java", likes: 0, dislikes:0},
			{name:"C#", likes: 0, dislikes:0},
			{name:"SQL", likes: 0, dislikes:0},
			{name:"Angular JS", likes: 0, dislikes:0}
	];

	$scope.technologies = technologies;
	//functions to update likes & dislikes
	$scope.incrementLikes = function (technology) {
		technology.likes++;
	}
	$scope.incrementDislikes = function (technology) {
		technology.dislikes++;
	}
});
				
