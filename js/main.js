"use strict";

//Dichiaro un array per le bombe
const bombArray = [];


const boardContainer = document.querySelector(".board");

for(let i = 1; i <= 100; i++){
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("board-number");

    //Evento click
    boardCell.addEventListener("click", function(){
        
        this.classList.add("cell-color");
        console.log(this.innerHTML);
    })

    boardContainer.append(boardCell);
}


createBombArray();






//Crea un array di 16 numeri random da 1 a 100 ----> Bombe
function createBombArray(){
    const arrayLength = 16;

    for(let i = 0; i < arrayLength; i++){
        bombArray.push(Math.floor(Math.random() * 100) + 1);

        if(bombArray[i] === bombArray[i]){
            bombArray.splice(i);
            bombArray.push(Math.floor(Math.random() * 100) + 1);
        }

        console.log(bombArray[i]);
    }

    
}



