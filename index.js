// Declaring variables
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
let countDown = false;

// Start Timer button event 
document.getElementById("startTimer").addEventListener("click", ()=>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(countDown ? countDownTimer : displayTimer, 10);
});

// Pause Timer button event 
document.getElementById("pauseTimer").addEventListener("click", ()=>{
    clearInterval(int);
});

// Reset Timer button event
document.getElementById("resetTimer").addEventListener("click", ()=>{
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0,0,0,0];
    countDown = false;
    timerRef.innerHTML = "00 : 00 : 00 : 000 ";
});

document.getElementById("setCountdown").addEventListener("click", () =>{
    hours = document.getElementById("hoursInput").value || 0;
    minutes = document.getElementById("minutesInput").value || 0;
    seconds = document.getElementById("secondsInput").value || 0;
    milliseconds = 0;
    countDown = true;
    
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(countDownTimer, 10);

})

function displayTimer(){
    milliseconds += 10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;
            
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
};

function countDownTimer() {
    if (milliseconds == 0){
        milliseconds = 990;
        if (seconds === 0){
            seconds = 59;
            if (minutes == 0){
                minutes = 59;
                hours--;
            } else{
                minutes--;
            }
        } else {
            seconds--;
        }
    } else{
        milliseconds -= 10;
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}


