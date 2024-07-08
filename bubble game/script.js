let timer = 6;
let score = 0;
let rn = 0;

function getnewhit() {
     rn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=rn;
}
function makebubble() {
    let cluster = ``;
for (let index = 1; index <= 168; index++) {
    let ranNum = Math.floor(Math.random()*10);
    cluster += `<div class="bubble">${ranNum}</div>`;
}
document.querySelector("#panelblw").innerHTML=cluster;
}
function runTimer() {
     let timerint = setInterval(() => {
        if (timer>0) {
            timer--;
        document.querySelector("#timervalue").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panelblw").innerHTML=`<h1>Game Over </h1>`;
        }
    },1000)
}
function scoreinc() {
    score += 10;
    document.querySelector("#scorevalue").textContent=score;
}

document.querySelector("#panelblw")
.addEventListener("click",(details)=>{
let clikednum = Number(details.target.textContent);
if (clikednum===rn) {
    scoreinc();
    makebubble();
    getnewhit();
}
});
getnewhit();
makebubble();
runTimer();
