(function() {
  angular.module('IndecisiveApp')
  .controller('HomeCtrl', ['Auth', 'AuthInterceptor', HomeCtrl]);

  function HomeCtrl(Auth, AuthInterceptor) {
    var vm = this;
    vm.Auth = Auth;
  }
})()