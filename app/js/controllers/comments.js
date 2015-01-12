(function () {
    'use strict';

    function CommentsController($scope, backendService) {
        backendService.commentsv1.query(function(data) {
            $scope.comments = data;
        });
    }

    angular.
        module('CommentControllers', []).
        controller('CommentsController', ['$scope', 'backendService', CommentsController]);
}());