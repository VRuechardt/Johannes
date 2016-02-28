'use strict';

angular.module('hansi.footer', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {}])

    .directive('footerDirective',  [function() {
        return {
            restrict: 'E',
            templateUrl: 'directives/footer/footer.html'
        }
    }]);