(function(){
  angular.module('IndecisiveApp')
  .controller('ChartsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', 'Charts', ChartsCtrl]);

  function ChartsCtrl($http, $state, Auth, AuthInterceptor, Charts) {
    var vm = this;
    Charts.query(function success(chartData) {
 
     vm.getAverage = function (ratings){
        var sum = 0;
        for(var i = 0; i < ratings.length; i++) {
          sum += ratings[i].rating;
        } 
        return (sum / ratings.length);
      }
      vm.items = chartData.items;
    }, function error(chartData) {
      console.log(chartData.items);
    });

    vm.deleteItem = function(id) {
      console.log(id);
      Charts.delete({ id: id }, function success(data) {
        console.log('success', data);
      }, function error(data) {
        console.log(data);
      });
    }
  }
})()