(function () {
    'use strict';

    /**
     * @name  AdminCtrl
     * @description Controller
     */
    function AdminCtrl($scope, $http, $log, $localStorage, $location, connexionService) {
        var user;
        connexionService.getUser().then(function (user) {
            if (user.roles.indexOf("ROLE_ADMIN") !== -1) {
                getUsers($scope, $http);
            }
            else {
                $scope.errorMessage = "Votre compte n'est pas encore validé par les admin";
            }
        });
        $scope.logoutButton = function () {
            connexionService.logout();
            $localStorage.$reset();
            $location.path("/");
        };

        $scope.promoteUser = function (userId) {
            var userToPromote = {};
            userToPromote.userId = userId;
            $http.post('http://devapi.dentist-data.fr/api/user/promote', userToPromote).success(function (data, status) {
                getUsers($scope, $http);
            });
        };
        $scope.demoteUser = function (userId) {
            var userToPromote = {};
            userToPromote.userId = userId;
            $http.post('http://devapi.dentist-data.fr/api/user/demote', userToPromote).success(function (data, status) {
                getUsers($scope, $http);
            });
        }
    }

    function getUsers($scope, $http) {

        $scope.isAdmin = true;
        $http.get('http://devapi.dentist-data.fr/api/getUsers').success(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].roles.indexOf("ROLE_CUSTOMER") === -1 && data[i].roles.indexOf("ROLE_ADMIN") === -1) {
                    data[i].promotable = true;
                } else if (data[i].roles.indexOf("ROLE_CUSTOMER") !== -1) {
                    data[i].demotable = true;
                }
            }
            $scope.users = data;
        })

    }

    angular.module('admin', [])
        .controller('AdminCtrl', AdminCtrl);
})
();
