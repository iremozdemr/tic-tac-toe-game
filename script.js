const actionsButton = document.getElementsByClassName("actions-button")[0];
const resetButton = document.getElementsByClassName("reset-button")[0];
const newRoundButton = document.getElementsByClassName("new-round-button")[0];
let showed = false;

function toggleMenu(){
    if(showed == false){
        resetButton.style.display = "block";
        newRoundButton.style.display = "block";
        showed = true;
    }
    else if(showed == true){
        resetButton.style.display = "none";
        newRoundButton.style.display = "none";
        showed = false;
    }
}

actionsButton.addEventListener("click", toggleMenu);