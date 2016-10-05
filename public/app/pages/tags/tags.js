(function(){
  angular.module('IndecisiveApp')
  .controller('TagsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', TagsCtrl]);

  function TagsCtrl($http, $state, Auth, AuthInterceptor){
    var vm = this;
  }
})()