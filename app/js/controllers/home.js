var phonecatControllers = angular.module('HomeControllers', []);

phonecatControllers.controller('HomeController', ['$scope', function($scope) {
    $scope.hideNavBar = true;
}]);