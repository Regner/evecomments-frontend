var homeControllers = angular.module('HomeControllers', []);

homeControllers.controller('HomeController', ['$scope', function($scope) {
    $scope.hideNavBar = true;
}]);