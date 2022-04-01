'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/register', {
          templateUrl : 'register/register-page.html',
          controller: 'registerCtrl'
        }).
        when('/login', {
          templateUrl : 'login/login-page.html',
          controller: 'loginCtrl'
        }).
        when('/landing', {
          templateUrl : 'landing/landing-page.html',
          controller:'landingCtrl'
        }).
        when('/landing-option', {
          templateUrl : 'landing/landing-option-page.html'
        }).
        when('/product', {
          templateUrl : 'product/product-page.html',
          controller: 'productCtrl'
        }).
        otherwise('/landing');
    }
  ]);
