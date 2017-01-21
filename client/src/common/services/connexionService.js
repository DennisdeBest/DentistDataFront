var app = angular.module('common.services.connexionService', []);

app.factory('connexionService', function () {
    var login = false;

    return {
        swapLogin: function () {
            login = !login;
            console.log(login);
        },
        getLogin: function () {
            return login;
        }
    };
    /*
    this.getUser = function () {
        var deferred = $q.defer();
        $http.post('http://devapi.dentist-data.fr/api/auth', "").success(function (data, status) {
            $log.debug(status);
            if (status == 200) {
                if (data[0].username) {
                    //$log.debug(data);
                    logged = true;
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

        return deferred.promise;
    };*/
    //HTTP REQUEST FOR DUNKAKA
});