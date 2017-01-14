(function() {
  'use strict';

  function headerCtrl($scope, $log, $http) {
    $scope.showLoginPopin = false;
    $scope.createLoginPopin = function(){
      $scope.showLoginPopin = ! $scope.showLoginPopin;
      console.log("create login popin");
      $log.debug($scope.showLoginPopin);
    };
    $scope.loginAction = function () {
      $http({
        method: 'POST',
        url: 'http://devapi.dentist-data.fr/api/login',
        data: {
          username: $scope.loginUsername,
          password: $scope.loginPassword
        }
      }).then(function successCallback(response){
        $log.debug(response)
      }, function errorCallback(response){
        $log.debug(response)
      })
    }
  }
  headerCtrl.$inject = ['$scope', '$log', '$http'];
  angular.module('common.header', [])
      .controller('HeaderCtrl', headerCtrl);
})();
