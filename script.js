function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

const d = getURLParameter('d');

if (d == null) window.location.href = '/create';

const countdownDay = new Date(d);
const difference = countdownDay.getTime() - new Date().getTime();
const days = Math.round(difference / 86400000).toString();
document.getElementById('daysLeft').innerText = days;
