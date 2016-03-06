'use strict';

angular.module('hansi.impressum', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/impressum', {
            templateUrl: 'dest/impressum/impressum.html',
            controller: 'ImpressumController'
        });
    }])

    .controller('ImpressumController', require('./impressum.controller'));