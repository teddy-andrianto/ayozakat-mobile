'use strict';

angular.module('phonecatApp').controller('productCtrl', function($scope, $http, $location, $localStorage)  {
    $scope.doLogout= function(){
        $localStorage.login = false;
        $location.path( "/landing" );
    }
});