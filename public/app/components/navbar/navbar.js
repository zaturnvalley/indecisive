(function() {
  angular.module('IndecisiveApp')
  .component('navbar', {
    templateUrl: './components/navbar/navbar.html',
    controller: NavbarCtrl,
    controllerAs: 'navbar'
  });

  function NavbarCtrl() {
    var vm = this;
  }
})()