(function() {
  angular.module('IndecisiveApp')
  .component('chart', {
    templateUrl: 'app/components/chart/chart.html',
    controller: ChartCtrl,
    controllerAs: 'vm',
    bindings: {
      av: '='
    }
  });

  function ChartCtrl() {
    var vm = this;
    vm.labels = ["Loved", "Hated"];
    vm.data = [4, 1];
                // backgroundColor: [
                //     "#ff615c",
                //     "#056571"
                // ],
                // hoverBackgroundColor: [
                //     "#ccdfcb",
                //     "#414141"
                // ]


  }
})()