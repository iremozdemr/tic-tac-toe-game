const actionsButton = document.querySelector(".actions-button");
const resetButton = document.querySelector(".reset-button");
const newRoundButton = document.querySelector(".new-round-button");
const items = document.querySelectorAll(".items");
let showed = false;

const squares = document.querySelectorAll(".square");
const p1Wins = document.querySelector("#p1-wins");
const ties = document.querySelector("#ties");
const p2Wins = document.querySelector("#p2-wins");
const turnDiv = document.querySelector(".turn p");
const symbolForPlayer = document.querySelector("#symbol");

let currentPlayer = 1;
let p1Count = 0;
let tiesCount = 0;
let p2Count = 0;
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentWinner = 0;
let isFinished = false;
let isNewRound = false;

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

function newRound(){
    for(let i=0; i<9; i++){
        if(board[i] == 1){
            board[i] = 0;
            squares[i].textContent = "";
            squares[i].classList.remove("x-style");
        }
        else if(board[i] == 2){
            board[i] = 0;
            squares[i].textContent = "";
            squares[i].classList.remove("o-style");
        }
    }
    isNewRound = true;
    isFinished = false;
    currentPlayer = 1;
    currentWinner = 0;
    updateTurn();
}

function reset(){
    p1Count = 0;
    tiesCount = 0;
    p2Count = 0;
    p1Wins.innerHTML = "0 wins";
    ties.innerHTML = "0";
    p2Wins.innerHTML = "0 wins";
    newRound();
}

function clickSquare(event){
    if(isFinished == false){
        const index = parseInt(event.target.id)-1;
        if(currentPlayer == 1 && board[index] == 0){
            board[index] = 1;
            event.target.textContent = "x";
            event.target.classList.add("x-style");
            currentPlayer = 2;
            checkWinner();
        }
        else if(currentPlayer == 2 && board[index] == 0){
            board[index] = 2;
            event.target.textContent = "o";
            event.target.classList.add("o-style");
            currentPlayer = 1;
            checkWinner();
        }
        updateTurn();
    }
}

function updateTurn(){
    if(isNewRound){
        symbolForPlayer.className = "fa-solid fa-x turquoise";
        symbolForPlayer.style.color = "#3cc4bf";
        turnDiv.textContent = "player 1, you're up";
        turnDiv.style.color = "#3cc4bf";
        isNewRound = false;
    }
    else if(currentPlayer == 1){
        symbolForPlayer.className = "fa-solid fa-x turquoise";
        symbolForPlayer.style.color = "#3cc4bf";
        turnDiv.textContent = "player 1, you're up";
        turnDiv.style.color = "#3cc4bf";
    }
    else{
        symbolForPlayer.className = "fa-solid fa-o orange";
        symbolForPlayer.style.color = "#f2b147";
        turnDiv.textContent = "player 2, you're up";
        turnDiv.style.color = "#f2b147";
    }
}

function checkWinner(){
    if(board[0]==1 && board[1]==1 && board[2]==1){
        currentWinner = 1;
    }
    else if(board[0]==2 && board[1]==2 && board[2]==2){
        currentWinner = 2;
    }

    if(board[3]==1 && board[4]==1 && board[5]==1){
        currentWinner = 1;
    }
    else if(board[3]==2 && board[4]==2 && board[5]==2){
        currentWinner = 2;
    }

    if(board[6]==1 && board[7]==1 && board[8]==1){
        currentWinner = 1;
    }
    else if(board[6]==2 && board[7]==2 && board[8]==2){
        currentWinner = 2;
    }

    if(board[0]==1 && board[3]==1 && board[6]==1){
        currentWinner = 1;
    }
    else if(board[0]==2 && board[3]==2 && board[6]==2){
        currentWinner = 2;
    }

    if(board[1]==1 && board[4]==1 && board[7]==1){
        currentWinner = 1;
    }
    else if(board[1]==2 && board[4]==2 && board[7]==2){
        currentWinner = 2;
    }

    if(board[2]==1 && board[5]==1 && board[8]==1){
        currentWinner = 1;
    }
    else if(board[2]==2 && board[5]==2 && board[8]==2){
        currentWinner = 2;
    }

    if(board[0]==1 && board[4]==1 && board[8]==1){
        currentWinner = 1;
    }
    else if(board[0]==2 && board[4]==2 && board[8]==2){
        currentWinner = 2;
    }

    if(board[2]==1 && board[4]==1 && board[6]==1){
        currentWinner = 1;
    }
    else if(board[2]==2 && board[4]==2 && board[6]==2){
        currentWinner = 2;
    }

    if(currentWinner == 1){
        p1Count++;
        p1Wins.innerHTML = p1Count + " wins";
    }
    else if(currentWinner == 2){
        p2Count++;
        p2Wins.innerHTML = p2Count + " wins";
    }

    if(currentWinner != 0){
        isFinished = true;
    }
}

for(let i=0; i<9; i++){
    squares[i].addEventListener("click",clickSquare);
}

actionsButton.addEventListener("click", toggleMenu);

newRoundButton.addEventListener("click", newRound);

resetButton.addEventListener("click", reset);