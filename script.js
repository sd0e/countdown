// change this
const countdownDay = new Date(window.location.hash);


const difference = countdownDay.getTime() - new Date().getTime();
const days = Math.round(difference / 86400000).toString();
document.getElementById('daysLeft').innerText = days;
