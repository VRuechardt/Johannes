/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

module.exports = ['$scope', '$http', '$rootScope', '$routeParams', function($scope, $http, $rootScope, $routeParams) {

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
        });

}];