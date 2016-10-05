(function(){
  angular.module('IndecisiveApp')
  .controller('ChartsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', ChartsCtrl]);

  function ChartsCtrl($http, $state, Auth, AuthInterceptor){
    var vm = this;
  }
})()