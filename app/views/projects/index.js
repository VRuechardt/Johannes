'use strict';

angular.module('hansi.projects', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'views/projects/projects.html',
            controller: 'ProjectsController'
        });
    }])

    .controller('ProjectsController', require('./projects.controller'));