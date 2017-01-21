var app = angular.module('common.services.connexionService', []);

app.service('connexionService', function ($http, $log, $q) {
    $log.debug("loginService");
    var user;
    var logged = false;

    this.logout = function(){
        logged = false;
    };
    this.login = function(){
        $log.debug("Before login" + logged);
        logged = true;
        $log.debug("After login" + logged);
    }

    this.getLogged = function () {
        return logged;
    };

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
    };
});