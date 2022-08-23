var counter = document.getElementById("counter");
var startButton = document.getElementById("start-stop");
var clearCounter = document.getElementById("clear-counter");
var interval = null;
var seconds = 0;

function startCounter(seconds) {
    const time = new Date(seconds * 10).toISOString().slice(11, 22);
    counter.innerHTML = time.replace('.', ':');
}

startButton.onclick = () => {
    if (startButton.innerHTML == 'Start') {
        interval = window.setInterval(function () {
            seconds += 1;
            startCounter(seconds);
        }, 10);

        startButton.innerHTML = 'Stop';
    } else {
        clearInterval(interval);
        startButton.innerHTML = "Start";
    }
}

clearCounter.onclick = () => {
    clearInterval(interval);
    counter.innerHTML = '00:00:00:00';
    seconds = 0;

    if (startButton.innerHTML == 'Stop') {
        startButton.innerHTML = 'Start';
    }
}