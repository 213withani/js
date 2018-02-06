const apiButton = document.getElementById("chuck");
const outputDiv = document.getElementById("output");

const apiURL =
  "http://54.244.200.105/readings?gasName=all&startDateTime=dayago&endDateTime=now";

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
  outputDiv.innerText = console.log(data);
}
const CHART = document.getElementById("lineChart");

let lineChart = new Chart(CHART, {
  type: "line",
  data: {
    labels: ["2018-02-02T05:57:04Z", "2018-07-02T05:58:04Z", "2018-010-02T05:57:04Zmar"],
    datasets: [{
      label: "My First dataset",
      fill: false,
      borderColor: 'lightgreen',
      data: [2.375746290045407e-18, 3.827426164227489e-17, 5.827426164227489e-17]
    }]
  },
  options: {
    title: {
      text: "Chart.js Time Scale"
    },
    scales: {
      xAxes: [{
        type: "time",
        time: {
          format: 'YYYY-MM-DD HH:mm',
          // round: 'day'
          tooltipFormat: 'll HH:mm'
        },
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }, ],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'value'
        }
      }]
    },
  }

});