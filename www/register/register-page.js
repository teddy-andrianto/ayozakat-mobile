'use strict';

angular.module('phonecatApp').controller('registerCtrl', function($scope, $http, $location, $window,$document) {
    var image = $document[0].getElementById('myImage'); 
    image.src = "data:image/jpeg;base64,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"
    $scope.doCamera = function(){
         navigator.camera.getPicture(onSuccess, onFail, {  
            quality: 50,
            allowEdit: false, // OR unset as to allow default 'false'
            cameraDirection: 0, // BACK: 0 FRONT: 1
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            targetHeight: 200,
            targetWidth: 200   
         });  
         
         function onSuccess(imageData) { 
            //$scope.dataUrl = "data:image/jpeg;base64," + imageData; 
            image.src = "data:image/jpeg;base64," + imageData; 
         }  
         
         function onFail(message) { 
            alert('Failed because: ' + message); 
         } 
         console.log("2")
    }/* 
    $scope.doGallery = function(){
        navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
         });
      
         function onSuccess(imageURL) {
            $scope.dataUrl = imageURL; 
         }
      
         function onFail(message) {
            alert('Failed because: ' + message);
         }
    } */

});