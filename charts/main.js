(function() {
  let chartDataLabels = [];
  let chartDataPoints = [];
  const apiButton = document.getElementById("gasButton");
  const outputDiv = document.getElementById("output");

  const apiURL =
    "http://54.244.200.105/readings?gasName=methane&startDateTime=monthago&endDateTime=weekago";

  apiButton.addEventListener(
    "click",
    () => {
      fetch(apiURL)
        .then(response => {
          outputDiv.innerHTML = "Waiting for response...";
          if (response.ok) {
            return response;
          }
          throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(displayData)
        .catch(error => console.log("There was an error:", error));
    },
    false
  );

  function displayData(gasObjects) {
    gasObjects.map(function(gas) {
      chartDataLabels.push(gas.instant);
      chartDataPoints.push(gas.reading);
    });

    outputDiv.innerText = JSON.stringify(chartDataLabels);
  }

  const CHART = document.getElementById("lineChart");

  console.log(chartDataLabels);

  let lineChart = new Chart(CHART, {
    type: "line",
    data: {
      labels: chartDataLabels,
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          borderColor: "lightgreen",
          data: chartDataPoints
        }
      ]
    },
    options: {
      title: {
        text: "Chart.js Time Scale"
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              format: "YYYY-MM-DD HH:mm",
              // round: 'day'
              tooltipFormat: "ll HH:mm"
            },
            scaleLabel: {
              display: true,
              labelString: "Date"
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "value"
            }
          }
        ]
      }
    }
  });
})();
