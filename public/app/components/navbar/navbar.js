(function() {
  angular.module('IndecisiveApp')
  .component('navbar', {
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarCtrl,
    controllerAs: 'vm'
  });

  function NavbarCtrl() {
    var vm = this;
  }
})()