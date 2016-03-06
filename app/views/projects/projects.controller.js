'use strict';

module.exports = ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {

    $rootScope.page = 'projects';
    $("html, body").animate({ scrollTop: 0}, 600);

    $scope.swiper;

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

        $('#imageModal').openModal({
            ready: function() {
                $scope.swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 0,
                    keyboardControl: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                });
            }
        });

    };

}];
