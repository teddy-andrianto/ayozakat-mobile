'use strict';
angular.module('phonecatApp').controller('landingCtrl', function($scope,$uibModal,Internet,Popup ,accountService, $http, $location, $window,$document,$localStorage,$interval) {
            $scope.countClick = 0;            
           /*  var onSuccess = function(position) {
                metadata.datetime = position.timestamp
                metadata.longitude = position.coords.longitude
                metadata.latitude = position.coords.latitude
            };

            function onError(error) {

            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError); 
            metadata.deviceId = device.uuid
            metadata.platform = device.platform
            metadata.deviceOSVersion = device.version
            $localStorage.metadata = metadata */
            
            if($localStorage.login === true){
                $location.path( "/home");
            }

            document.addEventListener("deviceready", function () {
                 document.addEventListener("backbutton", onBackKeyDown, false);
                 function onBackKeyDown() {
                      Popup.confrim("Anda yakin keluar ?").then(function () {
                        navigator.app.exitApp();
                      });
                 } 
            });

            $scope.doLogin = function(){
              $scope.countClick = 1;
              let request = {
                "username" : $scope.loginData.username,
                "password" : $scope.loginData.password,
              }
              accountService.login(request)
              .then(function(response){
                /* console.log(response); */
                if(response.data.status===true){
                  $localStorage.login = response.data.status;
                  $localStorage.token = response.data.token; 
                  $location.path( "home" ).replace();
                }else{
                  $scope.countClick = 0;
                  Popup.alert("Username atau password salah");
                }
	            }).catch(function(response) {
                $scope.countClick = 0;
                Internet.checkConection("landing");
              });
              
              //accountService.login
               //  $localStorage.login = true;
                 
            }
            
                     
});
