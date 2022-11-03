"use strict";

//Dichiaro un array per le bombe
const bombArray = [];
let score = 0;

const boardContainer = document.querySelector(".board");


createBombArray();

for(let i = 1; i <= 100; i++){
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("board-number");

    
    //Evento click cell
    boardCell.addEventListener("click", function(){
        
        this.classList.add("cell-color");
        let clickedCell = Number(this.innerHTML);

        //Controlla se e' presente la cella cliccata all'interno dell'array delle bombe
        if(bombArray.includes(clickedCell)){
            this.classList.add("bomb");
            document.getElementById("score-text").innerHTML = "BOOM! HAI PERSO! Punteggio: " + score;
            const element = document.getElementById("board-id");
            element.remove();
            
        }
        else{
            score++;
            document.getElementById("score-text").innerHTML = "Score: " + score;
        }
        
    
    })

    boardContainer.append(boardCell);
}

//Evento click restart game
const restartBtn = document.getElementById("btn");

restartBtn.addEventListener("click", function(){

    location.reload(); 
    
})




//-------------------------FUNCTIONS--------------------//

//Crea un array di 16 numeri random da 1 a 100 ----> Bombe
function createBombArray(){

    const arrayLength = 16;
    

    for(let i = 0; i < arrayLength; i++){
        let num = Math.floor(Math.random() * 100) + 1;
        let check = bombArray.includes(num);

        if(check === false){
            bombArray.push(num);
        }
        else{
            while(check === true){
                num = Math.floor(Math.random() * 100) + 1;
                check = bombArray.includes(num);

                if(check === false){
                    bombArray.push(num);
                }
            }
        }

        console.log(bombArray[i]);
    }
}



