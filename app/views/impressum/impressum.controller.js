'use strict';

module.exports = ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.page = 'impressum';
    $("html, body").animate({ scrollTop: 0}, 600);

}];
