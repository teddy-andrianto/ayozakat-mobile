'use strict';
angular.module('phonecatApp').controller('homeCtrl', function($scope,$uibModal,Popup,Internet, accountService, $http, $location, $window,$document,$localStorage,$interval) {            
    accountService.dashboard()
    .then(function(response){
      if(response.data.authorization.status===true){
        $scope.data = response.data.body;
      }else{
        $localStorage.login = response.data.authorization.status;
        $location.path( "/" );
        Popup.alert("Sesi telah habis silahkan login kembali");
      }
    }).catch(function() {
        Internet.checkConection("home");
    });
    

    $scope.doUser = function () {
      $location.path( "/user" ).replace();;
    };

    $scope.doHome = function () {
      $location.path( "/home" ).replace();;
    };

    $scope.doMuzaki = function () {
      $location.path( "/muzaki" ).replace();
    };

            /* document.addEventListener("deviceready", function () {
                 document.addEventListener("backbutton", onBackKeyDown, true);
                 function onBackKeyDown() {
             
                    };      
            }); */            
                     
});