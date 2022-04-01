'use strict';

angular.module('phonecatApp').controller('landingCtrl', function($scope, $http, $location, $window,$document,$localStorage,$interval) {
    
    $scope.imgLogo =  $location.path("/img/logo.jpg");
            var onSuccess = function(position) {
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
            $localStorage.metadata = metadata
            
            if($localStorage.login === true){
                $location.path( "/product");
            }else{
                $location.path( "/landing-option");
            }

            // document.addEventListener("deviceready", function () {
            //     document.addEventListener("backbutton", onBackKeyDown, true);
            //     function onBackKeyDown() {
            //         Popup.Confirm('Are you sure you want to exit?')
            //         .then(function(res){
            //             if (res) {
            //             navigator.app.exitApp();
            //             }
            //         });
            //     }
            // })
            
                     
});