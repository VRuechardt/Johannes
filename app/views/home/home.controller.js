'use strict';

module.exports = ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.page = 'home';

    $scope.scrollHandler = function(e) {

        var scrollY = window.scrollY;
        $('.fullpage-parallax').css({
            top: (-scrollY / 3) + 'px'
        });

        if(scrollY > 0) {
            $('nav').css({
                background: 'rgba(0, 0, 0, 0.5)'
            });
        } else {
            $('nav').css({
                background: 'rgba(0, 0, 0, 0)'
            });
        }

    };

    window.addEventListener('scroll', $scope.scrollHandler);

    $scope.$on('$locationChangeStart', function( event ) {
        window.removeEventListener('scroll', $scope.scrollHandler);
    });

}];
