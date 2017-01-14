(function() {
  'use strict';

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl($scope, data) {
    var home = this;
    home.data = data.data;
    $scope.form = {};

    $scope.submitForm = function () {
      var datas = _getDatas();

      console.log(datas);
    };

    function _getDatas () {
      var form = $scope.form;

      return {

        C0ID : form.C0ID

      }

    }
  }

  angular.module('home', [])
    .controller('HomeCtrl', HomeCtrl);
})();


/*$scope.selected = {};

 $scope.tab = [
 { id: 0, name : "toto", datas : { id : 0, name : "tructoto", name2 : "truc2"}},
 { id: 1, name : "bidule", datas : { id : 1, name : "trucbidul", name2 : "truc2"}},
 { id: 2, name : "machin", datas : { id : 2, name : "trucmachin", name2 : "truc2"}},
 { id: 3, name : "tutu", datas : { id : 3, name : "tructutu", name2 : "truc2"}}
 ];

 $scope.test = function(){
 console.log();
 };

 <select ng-model="selected"
 ng-options="el.name for el in tab">
 <option value="" selected></option>
 </select>
 <button ng-click="test(selected)">button</button>*/