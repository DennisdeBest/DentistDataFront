(function () {
    'use strict';

    /**
     * @name  AdminCtrl
     * @description Controller
     */
    function AdminCtrl($scope, $http, $log) {
        $http.post('http://devapi.dentist-data.fr/api/auth', "").success(function (data, status, error) {
            if (status == 200) {
                var user;
                if (data[0].username) {
                    user = data[0]

                    if (user) {
                        $scope.username = user.username;
                        $scope.email = user.email;
                    }
                }
            }
        }).error(function (error, status) {
            $log.debug(error);
            $log.debug(status);
            $scope.errorMessage = error;
        });



        // if( data.roles.indexOf("ROLE_ADMIN") !== -1){
        //  $scope.isAdmin = true;
        //}
    }

    angular.module('admin', [])
        .controller('AdminCtrl', AdminCtrl);
})();
