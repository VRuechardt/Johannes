'use strict';

angular.module('hansi.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', require('./home.controller'));