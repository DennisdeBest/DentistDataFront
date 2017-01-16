(function () {
    'use strict';

    /**
     * @name  AdminCtrl
     * @description Controller
     */
    function AdminCtrl($scope, $http, $log, $localStorage, $location) {
        $http.post('http://devapi.dentist-data.fr/api/auth', "").success(function (data, status, error) {
            if (status == 200) {
                var user;
                if (data[0].username) {
                    user = data[0];

                    if (user) {
                        $scope.username = user.username;
                        $scope.email = user.email;
                    }
                }

                if( user.roles.indexOf("ROLE_ADMIN") !== -1){
                  $scope.isAdmin = true;
                    $http.get('http://devapi.dentist-data.fr/api/getUsers').success(function (data) {
                        $log.debug(data);
                        $scope.users = data;
                    })
                }
            }
        }).error(function (error, status) {
            $log.debug(error);
            $log.debug(status);
            $scope.errorMessage = error;
        });

        $scope.logoutButton = function () {
          $localStorage.$reset();
          $location.path( "/" );
        }




    }

    angular.module('admin', [])
        .controller('AdminCtrl', AdminCtrl);
})();
