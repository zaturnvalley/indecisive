(function() {
  angular.module('IndecisiveApp')
  .component('navbar', {
    require: 'app/services.js',
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarCtrl,
    controllerAs: 'vm'
  });

  function NavbarCtrl(Auth) {
    var vm = this;
    vm.Auth = Auth;
    vm.LogOut = function(Auth){
      vm.Auth.removeToken();
    }
  }
  NavbarCtrl.$inject = ['Auth']
})()