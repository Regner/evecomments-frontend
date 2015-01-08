(function () {
    'use strict';

    function EVEComments(Restangular) {

        var test = Restangular.allUrl('comments', 'http://127.0.0.1:5000/api/comments/1/').getList();

        return test
    }

    angular.
        module('EVECommentsService', []).
        factory('EVEComments', ['Restangular', EVEComments]);
}());