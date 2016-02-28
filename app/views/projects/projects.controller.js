'use strict';

module.exports = ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.page = 'projects';
    $("html, body").animate({ scrollTop: 0}, 600);
    
}];
