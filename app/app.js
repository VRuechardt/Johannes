'use strict'

var angular = require('angular');
require('angular-route');

require('./views/home');
require('./views/projects');
require('./views/me');
require('./views/impressum');
require('./directives/footer');

angular.module('hansi', [
        'ngRoute',
        'hansi.home',
        'hansi.projects',
        'hansi.me',
        'hansi.impressum',
        'hansi.footer'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);