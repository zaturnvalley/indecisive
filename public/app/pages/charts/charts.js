(function(){
  angular.module('IndecisiveApp')
  .controller('ChartsCtrl', ['$http', '$state', 'Auth', 'AuthInterceptor', 'Charts', ChartsCtrl]);

  function ChartsCtrl($http, $state, Auth, AuthInterceptor, Charts) {
    var vm = this;
    Charts.query(function success(chartData) {
      var average = function (ratings){
        var total = 0;
        for(var i = 0; i < ratings.length; i++) {
          ratings[i] += total;
        } return total / ratings.length;
      }

      vm.rating = average(chartData.item.ratings);
      vm.items = chartData.items;
    }, function error(chartData) {
      console.log(chartData.items);
    });
  }
})()