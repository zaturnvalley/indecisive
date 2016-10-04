(function(){
  angular.module('IndecisiveApp')
  .controller('ChoicesCtrl', ['Auth', 'AuthInterceptor', ChoicesCtrl]);

  function ChoicesCtrl() {
    var vm = this;

    // vm.user.category = {
    //   type = '',
    //   rating = ''
    // }
  }
})()