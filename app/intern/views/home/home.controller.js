/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

module.exports = ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.projects = [];

    $http.get('api/project.php')
        .then(function(response) {

            $scope.projects = response.data;
            console.log(response.data);

        });


    $scope.showProject = function(project) {

        $location.path('/project/' + project.id);

    };

    $scope.delete = function(project) {

        if(window.confirm('Löschen?')) {

            $http.delete('api/project.php?id=' + project.id)
                .then(function(response) {

                    Materialize.toast('GELÖSCHT', 2000);

                    $http.get('api/project.php')
                        .then(function(response) {

                            $scope.projects = response.data;
                            console.log(response.data);

                        });

                });

        }

    };

}];