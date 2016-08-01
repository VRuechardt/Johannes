'use strict'

var angular = require('angular');
require('angular-route');

require('./views/home');
require('./views/projects');
require('./views/project');
require('./views/me');
require('./views/impressum');
require('./directives/footer');

angular.module('hansi', [
        'ngRoute',
        'hansi.home',
        'hansi.projects',
        'hansi.project',
        'hansi.me',
        'hansi.impressum',
        'hansi.footer'
    ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.hashPrefix('!');
    }])
    .directive("showOnceBackgroundLoaded", [function () {
        return {
            restrict: "A",
            scope: false,
            link: function (scope, element, attributes) {
                element.addClass("ng-hide");
                var image = new Image();
                image.onload = function () {
                    // the image must have been cached by the browser, so it should load quickly
                    scope.$apply(function () {
                        element.css({ backgroundImage: 'url("' + attributes.showOnceBackgroundLoaded + '")' });
                        $(element).fadeIn();
                        element.removeClass("ng-hide");
                    });
                };
                image.src = attributes.showOnceBackgroundLoaded;
            }
        };
    }]);