/**
 * Created by Valentin on 31/07/2016.
 */
'use strict'

var angular = require('angular');
require('angular-route');

require('./views/home');
require('./views/create');
require('./views/project');

angular.module('intern', [
        'ngRoute',
        'intern.home',
        'intern.create',
        'intern.project'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);