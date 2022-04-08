'use strict';

angular.module('phonecatApp').controller('muzakiCtrl', function($scope, $http,Popup,Internet, $location,$uibModal, $window,$document,$localStorage,accountService) {
  
  $scope.countClick = 0;

  $scope.doInputMuzaki = function(){
    $scope.countClick = 1;
    let request = {
      "kepala_kel" : $scope.inputData.kepala_kel,
      "beras" : $scope.inputData.beras
    }
    accountService.inputMuzaki(request)
    .then(function(response){
      if(response.data.authorization.status===true){
        $scope.dataMuzaki = response.data.body.data;
        if(response.data.body.inputStatus===true){
          $scope.inputData.kepala_kel = null;
          $scope.inputData.beras = null;
          getDataMuzaki(1);
          $scope.countClick = 0;
        }else{
          console.log("inputgagal");
        }
      }else{
        $localStorage.login = response.data.authorization.status;
        $location.path( "/" );
        Popup.alert("Sesi telah habis silahkan login kembali");
      }
    }).catch(function() {
      Internet.checkConection("muzaki");
    });
  }
  
  $scope.maxIndex;
  $scope.ind = 1;
  getDataMuzaki($scope.ind);

  function getDataMuzaki(index){
    let request = {
      "index" : index,
    }
    accountService.getMuzaki(request)
    .then(function(response){
      if(response.data.authorization.status===true){
        $scope.dataMuzaki = response.data.body.data;
        $scope.maxIndex = response.data.body.page;
        $scope.jumlahMuzaki = response.data.body.jumlahMuzaki;
        $scope.jumlahBeras =  response.data.body.jumlahBeras;
      }else{
        $localStorage.login = response.data.authorization.status;
        $location.path( "/" );
        Popup.alert("Sesi telah habis silahkan login kembali");
      }
    }).catch(function() {
      Internet.checkConection("muzaki");
    });
  }

  $scope.doDeleteMuzaki = function (id,nama) {
    let msg = "Anda Yakin Menghapus Muzaki dengan nama "+nama+" ?";
    Popup.confrim(msg).then(function () {
      accountService.deleteMuzaki(id)
      .then(function(response){
        if(response.data.authorization.status===true){
          getDataMuzaki($scope.ind); 
        }else{
          $localStorage.login = response.data.authorization.status;
          $location.path( "/" );
          Popup.alert("Sesi telah habis silahkan login kembali");
        }
      }).catch(function() {
        Internet.checkConection("muzaki");   
      });
    });
  };

  $scope.doNext = function (valind) {
    $scope.ind = $scope.ind+valind;
    if($scope.ind > $scope.maxIndex){
      $scope.ind = $scope.maxIndex;
    }else if ($scope.ind < 1) {
      $scope.ind = 1;
    }
    getDataMuzaki($scope.ind);

  };

  $scope.doUser = function () {
    $location.path( "/user" ).replace();
  };

  $scope.doHome = function () {
    $location.path( "/home" ).replace();
  };

  $scope.doMuzaki = function () {
    $location.path( "/muzaki" ).replace();
  };
});