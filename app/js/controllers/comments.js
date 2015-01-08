(function () {
    'use strict';

    function CommentsController($scope, $http) {
        $http.get('http://127.0.0.1:5000/api/v1/comments/1/').
        success(function(data) {
            $scope.comments = data;
        });
    }

    angular.
        module('CommentControllers', []).
        controller('CommentsController', ['$scope', '$http', CommentsController]);
}());