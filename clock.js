isMilitary = false; //sets the 24 hour time to false

window.onload = getTime(); //runs function on page load

function getTime() {
  setInterval(function () {
    const currentDate = new Date();

    if (isMilitary === true) {
      document.getElementById(
        "clockDate"
      ).innerHTML = currentDate.toDateString();
      document.getElementById(
        "clockTime"
      ).innerHTML = currentDate.toLocaleTimeString("en-GB");
    } else {
      document.getElementById(
        "clockDate"
      ).innerHTML = currentDate.toDateString();
      document.getElementById(
        "clockTime"
      ).innerHTML = currentDate.toLocaleTimeString("en-US");
    }
  }, 1000);
}

document.getElementById("timeToggle").addEventListener("click", function () {
  if (isMilitary === false) {
    isMilitary = true;
    getTime();
  } else {
    isMilitary = false;
    getTime();
  }
});
