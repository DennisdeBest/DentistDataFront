var app = angular.module('common.services.connexionService', []);

app.factory('connexionService', function ($q, $http, $log, $localStorage) {
    var login = false;
    var isAdmin = false;
    var isCustomer = false;

    return {
        swapLogin: function () {
            login = !login;
            console.log(login);
        },
        getLogin: function () {
            return login;
        },
        getAdmin: function () {
            return isAdmin;
        },
        getCustomer: function () {
            return isCustomer;
        },
        getUser: function () {
            var deferred = $q.defer();
            $http.post('http://devapi.dentist-data.fr/api/auth', "").success(function (data, status) {
                $log.debug(status);
                if (status == 200) {
                    if (data[0].username) {
                        //$log.debug(data);
                        login = true;
                        if (data[0].roles.indexOf("ROLE_ADMIN") !== -1) {
                            isAdmin = true;
                            console.log('isAdmin');
                        } else if (data[0].roles.indexOf("ROLE_CUSTOMER") !== -1) {
                            isCustomer = true;
                            console.log('isCustomer');
                        } else {
                            isCustomer = false;
                            isAdmin = false;
                        }
                        deferred.resolve(data[0]);
                        //return "kek";
                        //return data[0];
                    }
                } else {
                    deferred.reject();
                    $localStorage.$reset();
                }
            }).error(function (error, status) {
                deferred.reject();
            });
            // console.log(deferred);
            return deferred.promise;
        },
        logout: function () {
            $localStorage.$reset();
            login = false;
            isAdmin = false;
            isCustomer = false;
        },
        isAdmin: function () {
            this.getUser().then(function (data) {
                if (data.roles.indexOf("ROLE_ADMIN") !== -1) {
                    isAdmin = true;
                    console.log('isAdmin');
                } else {
                    isAdmin = false;
                    console.log('isNotAdmin');
                }
            })
        },
        isCustomer: function () {
            this.getUser().then(function (data) {
                if (data.roles.indexOf("ROLE_CUSTOMER") !== -1) {
                    isCustomer = true;
                } else {
                    isCustomer = false;
                }
            })
        }
    };
});