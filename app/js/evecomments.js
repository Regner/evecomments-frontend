
'use strict';

var eveCommentsApp = angular.module('eveCommentsApp', [
    'ngRoute',
    'HomeControllers',
    'CommentControllers'
]);

eveCommentsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        when('/comments/:siteID', {
            templateUrl: 'partials/comments.html',
            controller: 'CommentsController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);