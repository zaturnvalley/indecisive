(function (){
  var app = angular.module('IndecisiveApp', ['ui.router', 'IndecisiveServices']);

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
        templateUrl: 'app/pages/404/404.html',
        controller: 'Error404Ctrl as vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/pages/signup/signup.html'
        controller: 'SignupCtrl as vm'
      })

      $locationProvider.html5Mode(true);
    }])
})();