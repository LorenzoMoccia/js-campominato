"use strict";

// Dichiaro un array per le bombe
const bombArray = [];
let score = 0;

// Inizializza un array per tenere traccia dello stato di ogni cella
const cellState = [];

const boardContainer = document.querySelector(".board");
const boardSize = 100; // Numero di celle nel campo minato

createBombArray();

// Imposta tutte le celle a "non cliccate" (false)
for (let i = 1; i <= boardSize; i++) {
  cellState[i] = false;
}

// Aggiungi le celle al campo minato
for (let i = 1; i <= boardSize; i++) {
  const boardCell = document.createElement("div");
  boardCell.innerHTML = i;
  boardCell.classList.add("board-number");

  // Aggiungi l'evento di clic alla cella
  boardCell.addEventListener("click", function() {
    cellClicked(i);
  });

  boardContainer.append(boardCell);
}

// Funzione chiamata quando una cella viene cliccata
function cellClicked(cellNum) {
  // Controlla se la cella è già stata cliccata
  if (cellState[cellNum]) {
    return;
  }

  // Imposta la cella a "cliccata" (true)
  cellState[cellNum] = true;

  // Aggiorna l'interfaccia utente
  const boardCell = document.querySelector(`.board-number:nth-child(${cellNum})`);
  boardCell.classList.add("cell-color");

  // Controlla se la cella cliccata è una bomba
  if (bombArray.includes(cellNum)) {
    boardCell.classList.add("bomb");
    document.getElementById("score-text").innerHTML = "BOOM! HAI PERSO! Punteggio: " + score;
    const element = document.getElementById("board-id");
    element.remove();
  } else {
    score++;
    document.getElementById("score-text").innerHTML = "Score: " + score;
  }
}

//Evento click restart game
const restartBtn = document.getElementById("btn");
restartBtn.addEventListener("click", function(){
  location.reload(); 
})

//Crea un array di 3 numeri random da 1 a 100 ----> Bombe
function createBombArray() {
  const arrayLength = 3;

  for (let i = 0; i < arrayLength; i++) {
    let num = Math.floor(Math.random() * boardSize) + 1;
    while (bombArray.includes(num)) {
      num = Math.floor(Math.random() * boardSize) + 1;
    }
    bombArray.push(num);
    console.log(bombArray[i]);
  }
}
