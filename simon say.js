let gameseq=[];
let userseq = [];

let btns=["red","green","parrot","purpal"];
let startgame = false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(startgame==false){
        console.log("game is started");
        startgame = true;

        levelUp();
        }
        
});

function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;
    let rdmIdx= Math.floor(Math.random()*3);
    let rdmColor = btns[rdmIdx];
    let rdmBtn = document.querySelector(`.${rdmColor}`);
    // console.log(rdmIdx);
    // console.log(rdmColor);
    // console.log(rdmBtn);
    
    gameseq.push(rdmColor);
    console.log(gameseq);

    gameFlash(rdmBtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function checkans(idx){
    
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);            
        }       
     }
     else{
        h2.innerHTML=(`Game over! youe score is <b>${level}</b> <br>press any key to start game`);
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        highestScore(level);
        resetGame();
    }
}

function btnPress(){
    
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userseq.push(userColor); 
    console.log(userseq);
    checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
    
}
function resetGame(){
    startgame=false;
    userseq=[];
    gameseq=[];
    level=0;
}
function highestScore(idx){
    let score=[];
    score.push=`${level}`
    console.log(score);
    if(score[idx]>score[idx+1]){
        console.log(score[idx]);
        h3 =document.createElement("h3")
        h2.appendChild(h3);
        h3.innerText=(`higest score is ${score[idx]} `);
    }
}


