const teas = document.querySelectorAll(".tea_item")
const teaContainer = document.querySelector(".teatime_container");
const teaTimer = document.querySelector(".teatime_timer");
const timerClose = document.querySelector(".close");
const timerMin = document.querySelector(".time-m");
const timeDisplay = document.querySelector(".time-display");
var intervalTimer;

function clicked(){
    teaContainer.setAttribute("style","transform: translateY(-100%);");
    teaTimer.setAttribute("style","transform: translateY(-100%);");
    timerClose.setAttribute("tabindex", "0");
    teas.forEach(t => t.setAttribute("tabindex", "-1"));
    setTimer(this.dataset.time)
}
function closed(){
    teaContainer.setAttribute("style","transform: translateY(0%);");
    teaTimer.setAttribute("style","transform: translateY(100%);");
    timerClose.setAttribute("tabindex", "-1");
    teas.forEach(t => t.setAttribute("tabindex", "0"));
    clearInterval(intervalTimer);
}
function setTimer(t){
    const now = Date.now();
    const end = Date.now() + (t * 1000);
    countdown(end);
}
function countdown(end){
    intervalTimer = setInterval(() => {
        const secleft = Math.round((end - Date.now())/1000);
        const s = secleft % 60;
        const m = Math.floor(secleft / 60);
        if(secleft <= 0){
            timeDisplay.innerHTML = `00:00`;
            clearInterval(intervalTimer);
            closed();
            return;
        }
        displayTime(m,s);
    },1000);
}
function displayTime(m , s){
    timeDisplay.innerHTML = `0${m}:${paddedS(s)}`;
}
function paddedS(s){
    if(s < 10){
        return ("0"+s);
    }
    return s;
}
teas.forEach(tea => tea.addEventListener("click", clicked));
teas.forEach(tea => tea.addEventListener("keypress", clicked));
timerClose.addEventListener("click", closed);
timerClose.addEventListener("keypress", closed);
