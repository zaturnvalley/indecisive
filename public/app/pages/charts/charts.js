(function(){
  angular.module('IndecisiveApp')
  .controller('ChartsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', 'Charts', ChartsCtrl]);

  function ChartsCtrl($http, $state, Auth, AuthInterceptor, Charts) {
    var vm = this;
    Charts.query(function success(chartData) {
      vm.items = chartData.items;
      console.log('in ctrl');
    }, function error(chartData) {
      console.log(chartData);
    });
  }
})()