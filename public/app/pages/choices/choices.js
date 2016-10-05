(function(){
  angular.module('IndecisiveApp')
  .controller('ChoicesCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', ChoicesCtrl]);

  function ChoicesCtrl($http, $state, Auth, AuthInterceptor) {
    var vm = this;
    vm.item = {
      name: '',
      rating: 0,
      user: Auth.user
    }
    vm.submitItem = function() {
      $http.post('/api/items', vm.item).then(function success(res) {
        $state.go('home');
      }, function error(res) {
        console.log(res);
      })
    }
  }
})()