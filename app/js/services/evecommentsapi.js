(function () {
    'use strict';

    function backendService($resource) {
        var service = {}

        service.commentsv1 = $resource('/api/v1/comments/1/:comment_id');

        return service
    }

    angular.
        module('BackendServices', []).
        factory('backendService', ['$resource', backendService]);
}());