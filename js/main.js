"use strict";

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