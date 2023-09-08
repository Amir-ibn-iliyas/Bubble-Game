var timer=60;
var hitrn = 0;
var score = 0;
// var decrease = 0;

function makeBubble(){
    var clutter="";
for(var i=1; i<=192 ; i++){
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML= clutter;

}

function  gethit(){
     hitrn =Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent= hitrn;
}

function runTimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
       document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint)
            document.querySelector("#hitval").textContent=0;
          var a=  document.querySelector("#pbtm")
           a.style.flexDirection="column";
           a.style.backgroundColor="Tan ";
           a.style.color="  #354a35";
           a.innerHTML = `<h1>Game Over</h1> <h1>Your Score = ${score}</h1>`;
           document.querySelector("#scoreval").textContent=0;
        }
    },1000);
}
function increaseScore(){
    score +=10 ;
    document.querySelector("#scoreval").textContent = score;

}

function decreaseNum(){
    var decrease=score-=10;
    document.querySelector("#scoreval").textContent= decrease;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
  var clickednum =  Number(dets.target.textContent);
 if ( clickednum === hitrn) {
    increaseScore();
    gethit();
    makeBubble();

 }
  else{
    decreaseNum();
  }
});

var c= document.querySelector("button")
c.addEventListener("click",function(){
    runTimer();
    c.style.display="none";
    document.querySelector("#pannel").style.display="block";
});


gethit();

makeBubble();