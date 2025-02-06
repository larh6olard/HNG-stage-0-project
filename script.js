
utcTimeElement = document.querySelector("#utc-time");

const updateUTCTime = () => {
  const now = new Date();
  const utcTimeString = now.toUTCString();
  utcTimeElement.textContent = utcTimeString;
}

updateUTCTime();

setInterval(updateUTCTime, 1000);