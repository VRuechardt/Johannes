'use strict';

module.exports = ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.page = 'me';
    $("html, body").animate({ scrollTop: 0}, 600);

    $('nav').toggleClass('filled', true);
    $scope.$on('$locationChangeStart', function( event ) {
        $('nav').toggleClass('filled', false);
    });


}];
