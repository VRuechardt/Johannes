'use strict';

module.exports = ['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {

    $scope.projectList = [
        {
            slides: [
                {
                    src: 'img/Pfeffermühle_1.jpg'
                },
                {
                    src: 'img/Pfeffermühle_2.jpg'
                },
                {
                    src: 'img/Pfeffermühle_3.jpg'
                },
                {
                    src: 'img/Pfeffermühle_4.jpg'
                },
                {
                    src: 'img/Pfeffermühle_5.jpg'
                },
                {
                    src: 'img/Pfeffermühle_6.jpg'
                },
                {
                    src: 'img/Pfeffermühle_7.jpg'
                }
            ]
        }
    ];

    $scope.project = $scope.projectList[0];

    $rootScope.page = 'projects';
    $("html, body").animate({ scrollTop: 0}, 600);
    $('nav').toggleClass('filled', true);
    $scope.$on('$locationChangeStart', function( event ) {
        $('nav').toggleClass('filled', false);
    });

    $scope.swiper;

    $timeout(function() {

        $('.card').each(function(i, o) {
            $(o).delay(i*250).fadeIn(400);
        });

    });


    $scope.openProject = function(i) {

        $scope.project = $scope.projectList[i];

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
