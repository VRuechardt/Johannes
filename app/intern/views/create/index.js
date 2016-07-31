/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

angular.module('intern.create', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/create', {
            templateUrl: 'dest/create/create.html',
            controller: 'CreateController'
        });
    }])

    .controller('CreateController', require('./create.controller'));