/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

angular.module('hansi.projects', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'dest/projects/projects.html',
            controller: 'ProjectsController'
        });
    }])

    .controller('ProjectsController', require('./projects.controller'));