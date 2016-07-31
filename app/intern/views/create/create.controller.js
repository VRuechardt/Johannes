/**
 * Created by Valentin on 31/07/2016.
 */
'use strict';

module.exports = ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

    $scope.project = {
        moreImages: []
    };

    $scope.hasSingle = false;

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
                    $scope.project.singleImage = response.path;

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
                    $scope.project.moreImages.push(response.path);

                })
                .error(function(err){

                    console.log(err);

                });

        }

    };

    $scope.save = function() {

        if($scope.project.title && $scope.project.title.trim() !== '' && $scope.project.content && $scope.project.content.trim() !== '') {

            $http.post('api/project.php', {
                title: $scope.project.title.trim(),
                content: $scope.project.content.trim(),
                singleImage: $scope.project.singleImage,
                moreImages: $scope.project.moreImages,
                index: $scope.project.index
            }).then(function(response) {

                Materialize.toast('Gespeichert', 2000);

            }, function(err) {

                Materialize.toast('Fehler', 2000, 'red white-text');

            });

        }

    };

}];