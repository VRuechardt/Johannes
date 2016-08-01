/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

module.exports = ['$scope', '$http', '$rootScope', '$routeParams', '$timeout', '$location', function($scope, $http, $rootScope, $routeParams, $timeout, $location) {

    $rootScope.page = 'project';
    $("html, body").animate({ scrollTop: 0}, 600);
    $('nav').toggleClass('filled', true);
    $scope.$on('$locationChangeStart', function( event ) {
        $('nav').toggleClass('filled', false);
    });

    $http.get('api/project.php?id=' + $routeParams.id)
        .then(function(response) {
            console.log(response);
            $scope.project = response.data;

            $http.get('api/project.php')
                .then(function(response) {

                    $scope.projects = response.data;
                    console.log(response.data);
                    $scope.projects.forEach(function(project, i) {
                        if(project.index == $scope.project.index) {
                            $scope.index = i;
                            console.log(i);
                        }
                    });

                });
            
        });

    $timeout(function() {

        var o = $('.project--right').offset();
        $('.project--right').css({left: o.left + 'px', top: o.top - 50 + 'px', position: 'fixed'});

    }, 50);
    
    $scope.prev = function() {
        
        if($scope.index > 0) {

            $location.path('/project/' + $scope.projects[$scope.index-1].id);
            
        }
        
    };

    $scope.next = function() {

        if($scope.index < $scope.projects.length - 1) {

            $location.path('/project/' + $scope.projects[$scope.index*1+1].id);

        }

    };
    

}];