'use strict';
angular.module('phonecatApp').controller('ConfrimCtrl', function ($uibModalInstance, data, $scope) {
    //var pc = this;
    $scope.data = data;
    
    $scope.ok = function () {
      $uibModalInstance.close();
    };
  
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };  
  });

angular.module('phonecatApp').controller('AlertCtrl', function ($uibModalInstance, data, $scope) {
    //var pc = this;
    $scope.data = data;
    $scope.ok = function () {
      $uibModalInstance.close();
    };
  });


angular.module('phonecatApp').service('Popup', function($uibModal){
    this.alert = function (data) {
        console.log("cek 1: "+data);
        var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'modal/templateAlert.html',
        controller: 'AlertCtrl',
        size: 'xs',
        resolve: {
          data: function () {
          return data;
          }
        }
        
        });
      
        return modalInstance.result;
    }

    this.confrim = function (data) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'modal/templateConfrim.html',
        controller: 'ConfrimCtrl',
        size: 'xs',
        resolve: {
          data: function () {
            return data;
          }
        }
      });
      return modalInstance.result;
    }
});