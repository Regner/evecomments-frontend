(function () {
    'use strict';

    function CommentsController($scope, backendService) {
        var comments = backendService.commentsv1.query(function() {
            $scope.comments = comments
        });
    }

    angular.
        module('CommentControllers', []).
        controller('CommentsController', ['$scope', 'backendService', CommentsController]);
}());