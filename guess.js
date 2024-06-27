

var score=0;
var mark=0;


 function rock(){
    let player = document.getElementById("player");
    let computer = document.getElementById("computer");
    let playerscore= document.getElementById("playerscore");
    let computerscore = document.getElementById("computerscore"); 
    let result = document.getElementById("status")
    let num; 
    
    num = Math.floor(Math.random()*3)+1

    if (num == 1){

        result.textContent ="draw.....🪨"
        player.textContent="PLAYER: ROCK"
        computer.textContent="COMPUTER : ROCK"
         

    }
    else if (num == 2){
        result.textContent = "loss.....🧻🧻🧻"
        player.textContent="PLAYER: ROCK"
        computer.textContent="COMPUTER : PAPER"
        computerscore.textContent=`COMPUTER SCORE :${++mark}`
    }
    else{
        result.textContent = "won.....✂️✂️✂️"
        player.textContent="PLAYER: ROCK"
        computer.textContent="COMPUTER : SCISSOR"
        playerscore.textContent=`PLAYER SCORE : ${++score}`
    }


 }
 



 function paper(){
    let result = document.getElementById("status");
    let num ;
    num = Math.floor(Math.random()*3)+1
    let image = document.getElementById("change")

    if (num == 1){

        result.textContent = "won.....🪨🪨🪨🪨"
        image.src="img/won.jpg.jfif"
        player.textContent="PLAYER: PAPER"
        computer.textContent="COMPUTER : ROCK"
        playerscore.textContent=`PLAYER SCORE :${++score}`

    }
    else if (num == 2){
        result.textContent = "draw.....🧻"
        player.textContent="PLAYER: PAPER"
        computer.textContent="COMPUTER : PAPER"
        
    }
    else{
        result.textContent = "loss....✂️✂️✂️"
        player.textContent="PLAYER: PAPER"
        computer.textContent="COMPUTER : SCISSCOR"
        computerscore.textContent=`COMPUTER SCORE :${++mark}`
    }


 }
 
 function scissor(){
    let result = document.getElementById("status");
    let num;
    num = Math.floor(Math.random()*3)+1

    if (num == 1){

        result.textContent = "loss.....🧻🧻🧻"
        player.textContent="PLAYER: SCISSOR"
        computer.textContent="COMPUTER : PAPER"
        computerscore.textContent=`COMPUTER SCORE :${++mark}`

    }
    else if (num == 2){
        result.textContent = "won.....🪨🪨🪨🪨"
        player.textContent="PLAYER: SCISSOR"
        computer.textContent="COMPUTER : ROCK"
        playerscore.textContent=`PLAYER SCORE :${++score}`
    }
    else{
        result.textContent = "draw.....✂️"
        player.textContent="PLAYER: SCISSOR"
        computer.textContent="COMPUTER : SCISSOR"
        
    }


 }

 /*computer"></p>
        <p id="playerscore"></p>
        <p id="computerscore""></p>
        <p id="playerscore"></p>
        <p id="computerscore"*/