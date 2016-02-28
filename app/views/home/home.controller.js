'use strict';

module.exports = ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.page = 'home';

    $scope.scrollHandler = function(e) {

        var scrollY = window.scrollY;
        var opacity = 1 - Math.min(1, window.scrollY / 200);
        $('.fullpage-parallax').css({
            top: (-scrollY / 3) + 'px'
        });
        $('.splash-text').css({
            opacity: opacity
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

        $('nav').toggleClass('reversed', (scrollY + 64) > window.innerHeight);
        $('nav').toggleClass('z-depth-1', (scrollY + 64) > window.innerHeight);
        $('nav').toggleClass('z-depth-0', (scrollY + 64) <= window.innerHeight);

    };

    window.addEventListener('scroll', $scope.scrollHandler);

    $scope.$on('$locationChangeStart', function( event ) {
        window.removeEventListener('scroll', $scope.scrollHandler);
    });

}];
