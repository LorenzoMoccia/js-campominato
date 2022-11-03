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



