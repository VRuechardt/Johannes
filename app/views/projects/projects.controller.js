'use strict';

module.exports = ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {

    $rootScope.page = 'projects';
    $("html, body").animate({ scrollTop: 0}, 600);

    $timeout(function() {
        $('.card').each(function(i, o) {
            $(o).delay(i*250).fadeIn(400);
        });

        $('nav').toggleClass('dark', true);
    });

    $scope.$on('$locationChangeStart', function( event ) {
        $('nav').toggleClass('dark', false);
    });

    $scope.openProject = function(i) {

        $('#imageModal').openModal();

    };

}];
