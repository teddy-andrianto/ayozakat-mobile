'use strict';
angular.module('phonecatApp').service('accountService', function ($http,$localStorage) { 
	this.getMuzaki = function(request){
		//return $http.get("https://jsonplaceholder.typicode.com/posts");
		let body = `index=${request.index}`;
		let options = {
			headers:{
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
				'AUTHENTICATION-KEY': $localStorage.token
			}
		};
		return $http.post(ip+"/index.php/api/getMuzaki",body,options);
	}
	this.inputMuzaki = function(request){
		//return $http.get("https://jsonplaceholder.typicode.com/posts");
		let body = `kepala_kel=${request.kepala_kel}&beras=${request.beras}`;
		let options = {
			headers:{
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
				'AUTHENTICATION-KEY': $localStorage.token
			}
		};
		return $http.post(ip+"/index.php/api/inputMuzaki",body,options);
	}
	this.deleteMuzaki = function(request){
		//return $http.get("https://jsonplaceholder.typicode.com/posts");
		let body = `id_muzaki=${request}`;
		let options = {
			headers:{
				'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
				'AUTHENTICATION-KEY': $localStorage.token
			}
		};
		return $http.post(ip+"/index.php/api/hapusMuzaki",body,options);
	}
	this.login = function(request){
		//return $http.get("https://jsonplaceholder.typicode.com/posts");
		let body = `username=${request.username}&password=${request.password}`;
		let options = {
			headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
		};
		return $http.post(ip+"/index.php/api/login",body,options);
	}
	this.dashboard = function(){
		let options = {
			headers:{
			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
			'AUTHENTICATION-KEY': $localStorage.token}
		};
		return $http.post(ip+"/index.php/api/dashboard","",options);
	}
	this.updateUsername = function(request){
		let body = `username_new=${request.username_new}&confrim_password=${request.confrim_password}`;
		let options = {
			headers:{
			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
			'AUTHENTICATION-KEY': $localStorage.token}
		};
		return $http.post(ip+"/index.php/api/updateUsername",body,options);
	}
	this.updatePassword = function(request){
		let body = `password_new=${request.newPassword}&confrim_password=${request.password}`;
		let options = {
			headers:{
			'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
			'AUTHENTICATION-KEY': $localStorage.token}
		};
		return $http.post(ip+"/index.php/api/updatePassword",body,options);
	}
	this.updatePhotoProfile = function(request){
		let parameter = JSON.stringify(request);
		let options = {
			headers:{
			'Content-Type':'application/json; charset=UTF-8',
			'AUTHENTICATION-KEY': $localStorage.token}
		};
		return $http.post(ip+"/index.php/api/updatePhotoProfile",parameter,options);
	}
});

angular.module('phonecatApp').service('Internet', function($http,$uibModal,Popup,$localStorage,$location){
	this.checkConection = function (page) {
	  return $http({ method: 'GET', url: 'https://arthajaya.online'})
	  .then(function() {
			$location.path("/"+page).replace();
	  }).catch(function() {
			$localStorage.token = "";
        	$localStorage.login = false;
        	$location.path( "/" ).replace();
			Popup.alert("Koneksi Anda Terputus, Silahkan Coba Lagi");
	  });
	}
  });