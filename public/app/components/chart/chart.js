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
    console.log(vm.av);
    var ctx = $("#myChart");

    var data = {
        labels: [
            "Red",
            "Blue",
            "Yellow"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };
    var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: data
    });

  }
})()