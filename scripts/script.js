/// <reference path="angular.js" />
var myApp = angular
                .module('myModule', [])
                .controller('myController', function ($scope, $http, $log) {
                    var successCallback = function (response) {
                        $scope.employees = response.data;
                        $scope.isError = false;
                    }
                    var errorCallback = function (reason) {
                        $scope.error = reason.data;
                        $scope.isError = true;
                    }
                    $http({
                        method : 'GET',
                        url: 'EmployeeService.asmx/GetAllEmployees'
                    })
                    .then(successCallback, errorCallback);
            });
