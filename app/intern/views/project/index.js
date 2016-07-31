/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

angular.module('intern.project', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/project/:id', {
            templateUrl: 'dest/project/project.html',
            controller: 'ProjectController'
        });
    }])

    .controller('ProjectController', require('./project.controller'));