var app = angular.module('common.services.connexionService', []);

app.service('connexionService', function(){
    var login = false;
    this.swapLogin = function(){
        login = !login;
        console.log(login);
        return login;
    };
    this.getLogin = function(){
        return login;
    }
})