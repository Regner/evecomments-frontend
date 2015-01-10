(function () {
    'use strict';

    function backendService($resource) {
        var service = {}

        service.commentsv1 = $resource('http://localhost/api/v1/comments/1');

        return service
    }

    angular.
        module('BackendServices', []).
        factory('backendService', ['$resource', backendService]);
}());