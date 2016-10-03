(function (){
  var app = angular.module('IndecisiveApp', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $httpProvider.interceptors.push('AuthInterceptor');

      $urlRouterProvider.otherwise('/404');

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/home/home.html',
        controller: 'HomeCtrl as vm'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'app/pages/404/404.html'
      });
      locationProvider.html5Mode(true);
    }])
})();