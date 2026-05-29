function oppdater() {
    var tid = new Date();
    var timer = tid.getHours().toString().padStart(2, '0');
    var minnuter = tid.getMinutes().toString().padStart(2, '0');
    var sekunder = tid.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("klokkeutskrift").innerHTML = timeString;
    setTimeout(oppdater, 1000);
}

window.onload = oppdater;
