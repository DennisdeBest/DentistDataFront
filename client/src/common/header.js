(function () {
    'use strict';

    function headerCtrl($scope, $log, $http, $localStorage) {
        if($localStorage.token){
            $scope.logged = true;
        }

        $scope.showLoginPopin = false;
        $scope.createLoginPopin = function () {
            $scope.showLoginPopin = !$scope.showLoginPopin;
        };
        $scope.loginAction = function () {
            if($scope.showRegisterPopin){
                $scope.showRegisterPopin = false;
            } else {
                var header = {
                    'php-auth-pw': $scope.loginPassword,
                    'php-auth-user': $scope.loginUsername
                };
                $http({
                    method: 'POST',
                    url: 'http://devapi.dentist-data.fr/api/login',
                    headers: header,
                }).then(function successCallback(response) {
                    $log.debug(response.data.token);
                    $localStorage.token = response.data.token;
                    $scope.logged = $localStorage.token;
                }, function errorCallback(response) {
                    $log.debug("Error")
                })
            }
        };
        $scope.registerAction = function(){
            if(!$scope.showRegisterPopin){
                $scope.showRegisterPopin = true;
            } else {
                var registerUserObject = {};
                registerUserObject.username = $scope.registerUsername;
                registerUserObject.email = $scope.registerEmail;
                registerUserObject.plainPassword = {
                    first: $scope.registerPassword,
                    second: $scope.registerPasswordRepeat
                };

                $http.post('http://devapi.dentist-data.fr/api/register', JSON.stringify(registerUserObject)).success(function (data) {
                    $log.debug(data);
                });

            }
        }
    }

    headerCtrl.$inject = ['$scope', '$log', '$http', '$localStorage'];
    angular.module('common.header', [])
        .controller('HeaderCtrl', headerCtrl);
})();
