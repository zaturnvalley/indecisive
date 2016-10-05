(function(){
  angular.module('IndecisiveApp')
  .controller('TagsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', 'Tags', TagsCtrl]);

  function TagsCtrl($http, $state, Auth, AuthInterceptor, Tags){
    var vm = this;
    Tags.query(function success(tagData) {
      console.log(tagData);
      vm.tags = tagData;
    }, function error(tagData) {
      console.log(tagData);
    });
  }
})()