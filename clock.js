isMilitary = false; //sets the 24 hour time to false

window.onload = getTime(); //runs function on page load

function getTime() {
  setInterval(function () {
    const currentDate = new Date(); //establishes current date/time

    //checks to see if user wants to show in military time or not
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

//this is the event listener to watch for time toggle request
document.getElementById("timeToggle").addEventListener("click", function () {
  if (isMilitary === false) {
    isMilitary = true;
    getTime();
  } else {
    isMilitary = false;
    getTime();
  }
});
