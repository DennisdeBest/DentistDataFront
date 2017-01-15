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
                var header = {
                    'php-auth-pw': $scope.loginPassword,
                    'php-auth-user': $scope.loginUsername
                };
                $log.debug(header);
                $http({
                    method: 'POST',
                    url: 'http://devapi.dentist-data.fr/api/login',
                    headers: header,
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
                var registerUserObject = {};
                registerUserObject.username = $scope.registerUsername;
                registerUserObject.email = $scope.registerEmail;
                registerUserObject.plainPassword = {
                    first: $scope.registerPassword,
                    second: $scope.registerPasswordRepeat
                };

                $log.debug(registerUserObject);
                $log.debug(JSON.stringify(registerUserObject));

                $http.post('http://devapi.dentist-data.fr/api/register', JSON.stringify(registerUserObject)).success(function (data) {
                    $log.debug(data);
                });

            }
        }
    }

    headerCtrl.$inject = ['$scope', '$log', '$http'];
    angular.module('common.header', [])
        .controller('HeaderCtrl', headerCtrl);
})();
