// script.js
function oppdater() {
    var tid = new Date();
    var hours = tid.getHours().toString().padStart(2, '0');
    var minutes = tid.getMinutes().toString().padStart(2, '0');
    var seconds = tid.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("klokkeutskrift").innerHTML = timeString;
    setTimeout(oppdater, 1000);
}

window.onload = oppdater;