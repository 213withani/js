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
    labels: ["Jan", "feb", "mar", "april", "may", "june", "july"],
    datasets: [
      {
        label: "My First dataset",
        fill:false,
        borderColor:'lightgreen',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }
});
