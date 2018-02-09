let chartDataLabels = [];
let chartDataPoints = [];
const apiButton = document.getElementById("chuck");
const outputDiv = document.getElementById("output");

const apiURL = "http://54.244.200.105/readings?gasName=methane";

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

function displayData(data) {
  
  console.log(data[0].instant);
  console.log(data[0].reading);

  // const methane =data.filter(el => el.gasName === 'methane');

  // data.forEach(function(label) {
  //   chartDataLabels.push(label.instant);
  //   chartDataPoints.push(label.reading);
  // });
  
  data.map(function (el) {
    chartDataLabels.push(el.instant);
    chartDataPoints.push(el.reading);
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
