'use strict'

var angular = require('angular');
require('angular-route');

require('./views/home');
require('./views/projects');
require('./views/me');

angular.module('hansi', [
        'ngRoute',
        'hansi.home',
        'hansi.projects',
        'hansi.me'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);