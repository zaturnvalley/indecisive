(function (){
  var app = angular.module('IndecisiveApp', ['ui.router', 'ngResource', 'chart.js']);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      //$httpProvider.interceptors.push('AuthInterceptor');

      // $urlRouterProvider.otherwise('/404');

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
        templateUrl: 'app/pages/signup/signup.html',
        controller: 'SignupCtrl as vm'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/pages/signin/signin.html',
        controller: 'SigninCtrl as vm'
      })
      .state('choices', {
        url: '/choices',
        templateUrl: 'app/pages/choices/choices.html',
        controller: 'ChoicesCtrl as vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about/about.html',
        controller: 'AboutCtrl as vm'
      })
      .state('charts', {
        url: '/charts',
        templateUrl: 'app/pages/charts/charts.html',
        controller: 'ChartsCtrl as vm'
      })
      .state('tags', {
        url: '/tags',
        templateUrl: 'app/pages/tags/tags.html',
        controller: 'TagsCtrl as vm'
      })
      $locationProvider.html5Mode(true);
    }])
})();