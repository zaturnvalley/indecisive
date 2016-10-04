(function() {
  angular.module('IndecisiveApp')
  .component('chart', {
    templateUrl: 'app/components/chart/chart.html',
    controller: ChartCtrl,
    controllerAs: 'vm'
  });

  function ChartCtrl() {
    var vm = this;
  }

  // vm.ctx = $("#myChart");

  // vm.myDoughnutChart = new Chart(ctx, {
  //   type: 'doughnut',
  //   data: data,
  //   options: options
  // });

  // vm.data = {
  //     labels: [
  //         "Red",
  //         "Blue",
  //         "Yellow"
  //     ],
  //     datasets: [
  //         {
  //             data: [300, 50, 100],
  //             backgroundColor: [
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56"
  //             ],
  //             hoverBackgroundColor: [
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56"
  //             ]
  //         }]
  // };
})()