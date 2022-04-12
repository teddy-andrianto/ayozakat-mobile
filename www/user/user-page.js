'use strict';
angular.module('phonecatApp').controller('userCtrl', function($scope, $uibModal,Popup, $location, $window,$document,$localStorage,accountService) {
  function getDataAmilin(){
    let user = JSON.parse(atob($localStorage.token.split(".")[1]));
    $scope.user = user.id;
    $scope.ip = ip;
  }

  getDataAmilin();

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

    $scope.doUpdateUsername = function(){
      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'user/update-username-modal.html',
        controller: 'UpdateUsernameCtrl',
        size: 'xs'
      });
      modalInstance.result.then(function () {
        getDataAmilin();
      });
    }

    $scope.doUpdatePassword = function(){
      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'user/update-password-modal.html',
        controller: 'UpdatePasswordCtrl',
        size: 'xs'
      });
      modalInstance.result.then(function () {
        getDataAmilin();
      });
    }

    $scope.doUpdateImg = function(){
      let modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'user/update-image-modal.html',
        controller: 'UpdateImageCtrl',
        size: 'xs'
      });
      modalInstance.result.then(function () {
        getDataAmilin();
      });
    }
});

angular.module('phonecatApp').controller('UpdateUsernameCtrl', function ($uibModalInstance,$localStorage,$location,$scope,accountService,Internet,Popup) {
  //var pc = this;
  $scope.submitUpdateUsername = function(){
    /* $scope.countClick = 1; */
    let request = {
      "username_new" : $scope.update.username,
      "confrim_password" : $scope.update.password
    }
    let user = JSON.parse(atob($localStorage.token.split(".")[1]));
    if(request.username_new===user.id.username){
      $location.path( "/user" );
      $uibModalInstance.close();
      Popup.alert("Username Tidak Ada Perubahan");
    }else{
      accountService.updateUsername(request)
      .then(function(response){
        if(response.data.authorization.status===true){
          if(response.data.body.updateStatus===true){
            $localStorage.token = response.data.body.token;
            $location.path( "/user" );
            $uibModalInstance.close();
          }else if(response.data.body.updateStatus==="USERNAME_USED"){
            $location.path( "/user" );
            $uibModalInstance.close();
            Popup.alert("Username sudah digunakan oleh user lain");
          }else if(response.data.body.updateStatus==="PASSWORD_INVALID"){
            $location.path( "/user" );
            $uibModalInstance.close();
            Popup.alert("Konfirmasi password salah");
          }else if(response.data.body.updateStatus===false){
            $location.path( "/user" );
            $uibModalInstance.close();
            Popup.alert("Error Update in Server");
          }
        }else{
          $localStorage.login = response.data.authorization.status;
          $location.path( "/" );
          Popup.alert("Sesi telah habis silahkan login kembali");
        }
      }).catch(function() {
        $location.path( "/user" );
        $uibModalInstance.close();
        Internet.checkConection("user");
      });
    }
  }
});

angular.module('phonecatApp').controller('UpdatePasswordCtrl', function ($uibModalInstance,Popup,$localStorage,$location,$scope,accountService,Internet) {
  //var pc = this;
  $scope.submitUpdatePassword = function(){
    $scope.countClick = 1;
    let request = {
      "newPassword" : $scope.update.newPassword,
      "conNewPassword" : $scope.update.conNewPassword,
      "password" : $scope.update.password
    }
    if(request.newPassword!=request.conNewPassword){
      Popup.alert("Password baru dan Konfirmasi Password baru tidak sama");
      $location.path( "/user" );
      $uibModalInstance.close();
    }else{
      accountService.updatePassword(request)
      .then(function(response){
        if(response.data.authorization.status===true){
          if(response.data.body.updateStatus===true){
            $location.path( "/user" );
            $uibModalInstance.close();
          }else if(response.data.body.updateStatus==="PASSWORD_INVALID"){
            $location.path( "/user" );
            $uibModalInstance.close();
            Popup.alert("Konfirmasi password salah");
          }else if(response.data.body.updateStatus===false){
            $location.path( "/user" );
            $uibModalInstance.close();
            Popup.alert("Error Update in Server");
          }
        }else{
          $localStorage.login = response.data.authorization.status;
          $location.path( "/" );
          Popup.alert("Sesi telah habis silahkan login kembali");
        }
      }).catch(function() {
        Internet.checkConection("user");
      });
    }
  }
});


angular.module('phonecatApp').controller('UpdateImageCtrl', function ($uibModalInstance,Popup,Internet,$localStorage,$location,$scope,accountService) {
  //var pc = this;
  $scope.uploadFiles = function(data){
    let request = {
      "imageUrl" : data.dataURL
    }
    accountService.updatePhotoProfile(request)
    .then(function(response){
      if(response.data.authorization.status===true){
        $localStorage.token = response.data.body.token;
        $location.path( "/user" );
        $uibModalInstance.close();
      }else{
        $localStorage.login = response.data.authorization.status;
        $location.path( "/" );
        Popup.alert("Sesi telah habis silahkan login kembali");
      }
    }).catch(function(response) {
      console.log(response);
      Internet.checkConection();
    })
  }
  
});
