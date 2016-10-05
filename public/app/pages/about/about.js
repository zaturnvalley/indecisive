(function() {
  angular.module('IndecisiveApp')
  .controller('AboutCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', AboutCtrl]);

  function AboutCtrl($http, $state, Auth, AuthInterceptor){
    var vm = this;
  }
})()