var timer = 60;
var score=0;
var hitrn;

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednumber = Number(dets.target.textContent);
    if(clickednumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 114; i++) {
        var x = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${x}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint=setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h2>Your Score is:${score}</h2>`;
        }
    },1000)
}



runTimer();
makeBubble();
getNewHit();
