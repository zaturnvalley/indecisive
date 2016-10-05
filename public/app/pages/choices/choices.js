(function(){
  angular.module('IndecisiveApp')
  .controller('ChoicesCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', ChoicesCtrl]);

  function ChoicesCtrl($http, $state, Auth, AuthInterceptor) {
    var vm = this;
    var item = {
      name: ''
    }
    var rating = {
      rating: 0,
      user: ,
      item: 
    }
    vm.submitItem = function() {
      $http.post('/api/item', vm.item).then(function success(res) {
        $state.go('home');
      }, function error(res) {
        console.log(res);
      })
    }
  }
})()