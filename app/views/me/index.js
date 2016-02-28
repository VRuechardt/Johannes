'use strict';

angular.module('hansi.me', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/me', {
            templateUrl: 'views/me/me.html',
            controller: 'MeController'
        });
    }])

    .controller('MeController', require('./me.controller'));