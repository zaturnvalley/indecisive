(function(){
  angular.module('IndecisiveApp')
  .controller('ChartsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', 'Charts' ChartsCtrl]);

  function ChartsCtrl($http, $state, Auth, AuthInterceptor, Charts){
    var vm = this;
  }
})()