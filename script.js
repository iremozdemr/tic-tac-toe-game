const actionsButton = document.querySelector(".actions-button");
const resetButton = document.querySelector("reset-button");
const newRoundButton = document.querySelector("new-round-button");
const items = document.querySelectorAll(".items");
let showed = false;

const squares = document.querySelectorAll(".square");
const p1Wins = document.querySelector("#p1-wins");
const ties = document.querySelector("#ties");
const p2Wins = document.querySelector("#p2-wins");
const turnDiv = document.querySelector(".turn");

let currentPlayer = 1;
let p1Count = 0;
let tiesCount = 0;
let p2Count = 0;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function toggleMenu(){
    if(showed == false){
        items[0].style.display = "block";
        items[1].style.display = "block";
        showed = true;
    }
    else if(showed == true){
        items[0].style.display = "none";
        items[1].style.display = "none";
        showed = false;
    }
}

actionsButton.addEventListener("click", toggleMenu);

function clickSquare(event){
    const index = parseInt(event.target.id)-1;
    if(currentPlayer == 1 && board[index] == 0){
        board[index] = 1;
        event.target.textContent = "x";
        currentPlayer = 2;
    }
    else if(currentPlayer == 2 && board[index] == 0){
        board[index] = 2;
        event.target.textContent = "o";
        currentPlayer = 1;
    }
    updateTurn();
}

function updateTurn(){
    if(currentPlayer == 1){
        turnDiv.textContent = "player 1, you're up";
    }
    else{
        turnDiv.textContent = "player 2, you're up";
    }
}

for(let i=0; i<9; i++){
    squares[i].addEventListener("click",clickSquare);
}