'use strict'

var angular = require('angular');
require('angular-route');

require('./views/home');

angular.module('hansi', [
        'ngRoute',
        'hansi.home'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);