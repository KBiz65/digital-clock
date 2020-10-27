function getTime12() {
  setInterval(function () {
    const currentDate = new Date();

    document.getElementById("clockDate").innerHTML = currentDate.toDateString();
    document.getElementById(
      "clockTime"
    ).innerHTML = currentDate.toLocaleTimeString();
    document.getElementById("timeToggle").onclick = getTime24;
  }, 1000);
}

function getTime24() {
  setInterval(function () {
    const currentDate = new Date();

    document.getElementById("clockDate").innerHTML = currentDate.toDateString();
    document.getElementById(
      "clockTime"
    ).innerHTML = currentDate.toLocaleTimeString("en-GB");
    document.getElementById("timeToggle").onclick = getTime12;
  }, 1000);
}
