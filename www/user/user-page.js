'use strict';
angular.module('phonecatApp').controller('userCtrl', function($scope, $http, $location, $window,$document,$localStorage) {
   let user = JSON.parse(atob($localStorage.token.split(".")[1]));
   $scope.user = user.id;
   $scope.ip = ip;

   $scope.doUser = function () {
      $location.path( "/user" ).replace();
    };

    $scope.doHome = function () {
      $location.path( "/home" ).replace();
    };

    $scope.doMuzaki = function () {
      $location.path( "/muzaki" ).replace();
    };

    $scope.doLogout = function () {
      $localStorage.token = "";
      $localStorage.login = false;
      $location.path( "/" );
    };
});