(function() {
  angular.module('IndecisiveApp')
  .controller('SigninCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', SigninCtrl]);

  function SigninCtrl($http, $state, Auth) {
    var vm = this;
    vm.user = {
      username = '',
      password = ''
    }
    vm.userSignin = function(){
      $http.post('/api/auth', vm.user).then(function success(res) {
        Auth.saveToken(res.data.token);
        $state.go('home');
      }, function error(res) {
        console.log(res);
      });
    }
  }
})()