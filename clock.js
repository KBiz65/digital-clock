setInterval(function getTime() {
  const currentDate = new Date();

  document.getElementById("clockDate").innerHTML = currentDate.toDateString();
  document.getElementById(
    "clockTime"
  ).innerHTML = currentDate.toLocaleTimeString();
}, 1000);
