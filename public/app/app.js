(function (){
  var app = angular.module('IndecisiveApp', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $httpProvider.interceptors.push('AuthInterceptor');

      $urlRouterProvider.otherwise('/404');

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html'
      })
    }])
})();