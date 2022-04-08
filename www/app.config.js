'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl : 'landing/landing-page.html',
          controller:'landingCtrl'
        }).
        when('/home', {
          templateUrl : 'home/home-page.html',
          controller: 'homeCtrl'
        }).
        when('/muzaki', {
          templateUrl : 'muzaki/muzaki-page.html',
          controller: 'muzakiCtrl'
        }).
        when('/user', {
          templateUrl : 'user/user-page.html',
          controller: 'userCtrl'
        })
    }
  ]);
  