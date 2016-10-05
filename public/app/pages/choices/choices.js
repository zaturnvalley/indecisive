(function(){
  angular.module('IndecisiveApp')
  .controller('ChoicesCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', ChoicesCtrl]);

  function ChoicesCtrl($http, $state, Auth, AuthInterceptor) {
    var vm = this;
    vm.item = {
      name: '',
      rating: 0,
      user: Auth.user,
      tag: ''
    }
    vm.submitItem = function() {
      console.log(Auth.currentUser().id)
      console.log(vm.item.rating)
      $http.post('/api/items', vm.item).then(function success(res) {
        $state.go('home');
      }, function error(res) {
        console.log(res);
      })
    }
  }
})()