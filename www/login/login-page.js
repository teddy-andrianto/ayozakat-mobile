'use strict';

angular.module('phonecatApp').controller('loginCtrl', function($scope, $http, $location, $window,$document,$localStorage) {
    $scope.greeting = 'Hola!';

    $scope.doLogin = function(){
        /* if ($scope.loginData.username && $scope.loginData.password){
            $scope.greeting = 'Berhasil Login';
            $scope.loginData=null;
        } */
       /*  $http({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
          }).then(function successCallback(response) {
            $scope.greeting = response.data.data.id
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            }); */
            $localStorage.login = true;
            $location.path( "/product" );

            //console.log(position.coords.latitude)

            /*  var onSuccess = function(position) {
                 alert('Latitude: '          + position.coords.latitude          + '\n' +
                       'Longitude: '         + position.coords.longitude         + '\n' +
                       'Altitude: '          + position.coords.altitude          + '\n' +
                       'Accuracy: '          + position.coords.accuracy          + '\n' +
                       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                       'Heading: '           + position.coords.heading           + '\n' +
                       'Speed: '             + position.coords.speed             + '\n' +
                       'Timestamp: '         + position.timestamp                + '\n');
            };
        
            // // onError Callback receives a PositionError object
            // //
            function onError(error) {
                 alert('code: '    + error.code    + '\n' +
                       'message: ' + error.message + '\n');
            }
        

            navigator.geolocation.getCurrentPosition(onSuccess, onError); */
    }

     /*  navigator.geolocation.getCurrentPosition(function(position) {
			console.log(position.coords.latitude);
		 });
     alert('Timestamp: '         + device.version                + '\n' +
           'Altitude Accuracy: ' + device.manufacturer           + '\n' +
           'Heading: '           + device.model                  + '\n' +
           'Speed: '             + device.uuid                   + '\n' +
           'Timestamp: '         + device.platform               + '\n'); */

});