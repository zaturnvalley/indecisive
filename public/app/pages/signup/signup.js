(function(){
  angular.module('IndecisiveApp');
  .controller('SignupCtrl', ['$http', '$state', SignupCtrl]);

  function SignupCtrl() {
    var vm = this;
    var user = {
      username: '',
      email: '',
      password: ''
    }
    vm.userSignup = function () {
      $http.post('api/users', vm.user).then(function success(res) {
        $state.go('home');
      }, function error(res){
        console.log(res);
      })
    }
  }
})()