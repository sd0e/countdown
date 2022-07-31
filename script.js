const hash = window.location.hash;

if (hash === '') window.location.href = '/create';

const countdownDay = new Date(hash);
const difference = countdownDay.getTime() - new Date().getTime();
const days = Math.round(difference / 86400000).toString();
document.getElementById('daysLeft').innerText = days;
