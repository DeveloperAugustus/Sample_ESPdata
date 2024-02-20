function fetchData() {
  fetch("http://192.168.50.43/")
    .then(response => response.text())
    .then(data => {
      document.getElementById("sensorData").innerHTML = data;
    })
    .catch(error => console.error("Error fetching data:", error));
}

// Fetch data every 5 seconds
setInterval(fetchData, 5000);

// Fetch data on page load
fetchData();