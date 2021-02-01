var min=0;
var sec=0;
var mili=0;

var mindiv=document.getElementById("min");
var secdiv=document.getElementById("sec");
var milidiv=document.getElementById("mili");
var startbtn=document.getElementById("start");
var pausebtn=document.getElementById("pause");
var resetbtn=document.getElementById("reset");
var interval;

function timer(){
    mili++;
    milidiv.innerHTML=mili;
    if(mili>=100){
        mili=0
        sec++;
        secdiv.innerHTML=sec;
    }
    else if(sec==60){
        sec=0;
        min++;
        mindiv.innerHTML=min;
    }
}

function start(){
    interval=setInterval(timer,10);
    startbtn.disabled=true;
    pausebtn.disabled=false;
    resetbtn.disabled=false;
}

function pause(){
    clearInterval(interval);
    startbtn.disabled=false;
    pausebtn.disabled=true;
    resetbtn.disabled=false;
}

function reset(){
    min=0;
    mili=0;
    sec=0;
    mindiv.innerHTML=min;
    secdiv.innerHTML=sec;
    milidiv.innerHTML=mili;   
    clearInterval(interval);
    startbtn.disabled=false;
    pausebtn.disabled=true;
    resetbtn.disabled=true;
}