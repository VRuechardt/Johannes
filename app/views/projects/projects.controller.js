'use strict';

module.exports = ['$scope', '$rootScope', '$timeout', '$http', '$location', function($scope, $rootScope, $timeout, $http, $location) {

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


    $timeout(function() {

        $('.card').each(function(i, o) {
            $(o).delay(i*250).fadeIn(400);
        });

    });


    $scope.openProject = function(project) {

        $location.path('/project/' + project.id);

    };

    $http.get('api/project.php')
        .then(function(response) {
            console.log(response);
            $scope.projects = response.data;
        });

}];
