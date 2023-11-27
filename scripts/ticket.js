const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

// Convert URL search parameters to a string
const paramsString = params.toString();
document.getElementById("qr").src = "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=" + paramsString;