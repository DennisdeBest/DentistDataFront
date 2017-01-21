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
    }
});