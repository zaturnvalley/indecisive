(function(){
  angular.module('IndecisiveApp')
  .controller('TagsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', 'Tags', TagsCtrl]);

  function TagsCtrl($http, $state, Auth, AuthInterceptor, Tags){
    var vm = this;
    Tags.query(function success(tagdata) {
      vm.tags = tagdata;
    }, function error(tagdata) {
      console.log(tagdata);
    });
  }
})()