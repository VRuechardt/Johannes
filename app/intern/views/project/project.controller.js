/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

module.exports = ['$scope', '$http', '$routeParams', '$timeout', function($scope, $http, $routeParams, $timeout) {

    $http.get('api/project.php?id=' + $routeParams.id)
        .then(function(response) {

            $scope.project = response.data;
            console.log(response);

        });

    $timeout(function() {

        $('#singleUploader').change(function() {
            $scope.uploadSingle();
        });

        $('#multiUploader').change(function() {
            $scope.uploadMultiple();
        });

    });

    $scope.uploadSingle = function() {

        var files = $('#singleUploader')[0].files;

        if(files && files.length === 1) {

            var fd = new FormData();
            fd.append('userfile', files[0]);

            $http.post('api/upload.php', fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                .success(function(response){

                    console.log(response);
                    $scope.hasSingle = true;
                    $scope.project.path = response.path;

                })
                .error(function(err){

                    console.log(err);

                });

        }

    };

    $scope.uploadMultiple = function() {

        var files = $('#multiUploader')[0].files;

        if(files && files.length === 1) {

            var fd = new FormData();
            fd.append('userfile', files[0]);

            $http.post('api/upload.php', fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                .success(function(response){

                    console.log(response);
                    $scope.project.images.push(response);

                })
                .error(function(err){

                    console.log(err);

                });

        }

    };

    $scope.deleteImage = function(index) {

        if(window.confirm('Bild wirklich löschen? Musst trotzdem noch speichern klicken.')) {
            $scope.project.images.splice(index, 1);
        }

    };

    $scope.save = function() {

        $http.put('api/project.php', $scope.project)
            .then(function(response) {
                console.log(response);
            })

    };

}];