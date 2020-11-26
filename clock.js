isMilitary = false; //sets the 24 hour time to false

window.onload = getTime(); //runs function on page load

function getTime() {
  const currentDate = new Date(); //establishes current date/time

  const clockDate = document.getElementById("clockDate");
  const clockTime = document.getElementById("clockTime");
  
  const twentyFourHrTime = currentDate.toLocaleTimeString("en-GB");
  const twelveHrTime = currentDate.toLocaleTimeString("en-US");
  const date = currentDate.toDateString();
  const time = isMilitary ? (clockTime.textContent = twentyFourHrTime) : (clockTime.textContent = twelveHrTime);

  clockDate.textContent = date;
  clockTime.textContent = time;
}

const timeToggle = document.getElementById("timeToggle")
timeToggle.addEventListener("click", function () {
  isMilitary = !isMilitary;
});

getTime(); // calls function on page load so there is no delay
setInterval(getTime, 1000); // calls getTime to update clock every second