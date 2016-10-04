(function(){
  angular.module('IndecisiveApp')
  .controller('ChoicesCtrl', [ChoicesCtrl]);

  function ChoicesCtrl() {
    var vm = this;

    vm.user.category = {
      type = '',
      rating = ''
    }
  }
})()