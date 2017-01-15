(function () {
    'use strict';

    function headerCtrl($scope, $log, $http) {
        $scope.showLoginPopin = false;
        $scope.createLoginPopin = function () {
            $scope.showLoginPopin = !$scope.showLoginPopin;
            console.log("create login popin");
            $log.debug($scope.showLoginPopin);
        };
        $scope.loginAction = function () {
            if($scope.showRegisterPopin){
                $scope.showRegisterPopin = false;
            } else {
                $http({
                    method: 'POST',
                    url: 'http://devapi.dentist-data.fr/api/login',
                    headers: {
                        'Content-Type': 'application/json',
                        'PHP_AUTH_PW': $scope.loginUsername,
                        'PHP_AUTH_USER': $scope.loginPassword
                    }
                }).then(function successCallback(response) {
                    $log.debug(response)
                }, function errorCallback(response) {
                    $log.debug(response)
                })
            }
        };
        $scope.registerAction = function(){
            if(!$scope.showRegisterPopin){
                $scope.showRegisterPopin = true;
            } else {
                $http({
                    method: 'POST',
                    url: 'http://devapi.dentist-data.fr/api/register',
                    dataType: 'JSON',
                    data: {
                        username: $scope.registerUsername,
                        email: $scope.registerEmail,
                        plainPassword: {
                            first: $scope.registerPassword,
                            second: $scope.registerPasswordRepeat
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function successCallback(response) {
                    $log.debug(response)
                }, function errorCallback(response) {
                    $log.debug(response)
                })
            }
        }
    }

    headerCtrl.$inject = ['$scope', '$log', '$http'];
    angular.module('common.header', [])
        .controller('HeaderCtrl', headerCtrl);
})();
