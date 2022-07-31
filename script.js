// change this
const countdownDay = new Date('September 5, 2022')


const differenceMs = countdownDay.getTime() - new Date().getTime();
const days = Math.round(differenceMs / 86400000).toString();
document.getElementById('daysLeft').innerText = days;
