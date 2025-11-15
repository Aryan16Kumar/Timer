let timeleft = 25 * 60;
let timerid = null;

const timerdisplay = document.getElementById("timer");
const startbtn = document.getElementById("start");
const pausebtn = document.getElementById("pause");
const resetbtn = document.getElementById("reset");

function updateDisplay() {
    let minute = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    
    if(seconds < 10) seconds = "0" + seconds;
    
    timerdisplay.textContent = `${minute}:${seconds}`;
}

startbtn.addEventListener("click",startTimer);

function startTimer () {
    if(timerid !== null)return;

    timerid = setInterval(() => {
        timeleft--;

        updateDisplay();

        if(timeleft <= 0){
            clearInterval(timerid);
            timerid = null;
            alert("Time is up!");

        }
    },1000);
}

pausebtn.addEventListener("click",() => {
    clearInterval(timerid);
    timerid = null;
});

resetbtn.addEventListener("click", () => {
    clearInterval(timerid);
    timerid = null;
    timeleft = 25 * 60;
    updateDisplay();
});

updateDisplay()