let rockOne = document.querySelector("#rockOne");
let paperOne = document.querySelector("#paperOne");
let scissorsOne = document.querySelector("#scissorsOne");

let rockTwo = document.querySelector("#rockTwo");
let paperTwo = document.querySelector("#paperTwo");
let scissorsTwo = document.querySelector("#scissorsTwo");

let resetButton = document.querySelector("#reset");
let playerOneChoice;
let playerTwoChoice;

resetButton.addEventListener("click", function () {
    playerOneChoice = "reset";
    playerTwoChoice = "reset";
    rockOne.textContent = "ROCK";
    paperOne.textContent = "PAPER";
    scissorsOne.textContent = "SCISSORS";

    rockTwo.textContent = "ROCK";
    paperTwo.textContent = "PAPER";
    scissorsTwo.textContent = "SCISSORS";
    rockOne.style.color = "#D2B48C";
    rockTwo.style.color = "#D2B48C";
    paperOne.style.color = "white";
    paperTwo.style.color = "white";
    scissorsOne.style.color = "#A9A9A9";
    scissorsTwo.style.color = "#A9A9A9";

})
rockOne.addEventListener("click", function() {
    if (notClicked(playerOneChoice))
        playerOneChoice = "rock";
    hideChoices(playerOneChoice);
    winner = determineWinner(playerOneChoice, playerTwoChoice);
    showWinner();

});
paperOne.addEventListener("click", function() {
    if (notClicked(playerOneChoice))
    playerOneChoice = "paper";
    hideChoices(playerOneChoice);
    winner = determineWinner(playerOneChoice, playerTwoChoice);
    showWinner();
});
scissorsOne.addEventListener("click", function() {
    if (notClicked(playerOneChoice))
    playerOneChoice = "scissors";
    hideChoices(playerOneChoice);
    winner = determineWinner(playerOneChoice, playerTwoChoice);
    showWinner();
});

rockTwo.addEventListener("click", function() {
    if (notClicked(playerTwoChoice))
    playerTwoChoice = "rock";
    hideChoices(playerTwoChoice);
    winner = determineWinner(playerOneChoice, playerTwoChoice);
    showWinner();
});
paperTwo.addEventListener("click", function() {
    if (notClicked(playerTwoChoice))
    playerTwoChoice = "paper";
    hideChoices(playerTwoChoice);
    winner = determineWinner(playerOneChoice, playerTwoChoice);
    showWinner();
});
scissorsTwo.addEventListener("click", function() {
    if (notClicked(playerTwoChoice))
    playerTwoChoice = "scissors";
    hideChoices(playerTwoChoice);
    winner = determineWinner(playerOneChoice, playerTwoChoice);
    showWinner();
});





function hideChoices(player) {
    if (player === playerOneChoice) {
        console.log("Hi");
        if (paperOne.textContent !== "" && rockOne.textContent !== "" && scissorsOne.textContent!== "") {
            if (playerOneChoice==="rock"){
                paperOne.textContent = "";
                scissorsOne.textContent = "";
            }
            else if(playerOneChoice==="scissors") {
                rockOne.textContent = "";
                paperOne.textContent="";
            }
            else if (playerOneChoice==="paper"){
                rockOne.textContent = "";
                scissorsOne.textContent = "";
            }
        }
    }
    if (player === playerTwoChoice) {
        console.log("Hi");
        if (paperTwo.textContent !== "" && rockTwo.textContent !== "" && scissorsTwo.textContent!== "") {
        if (playerTwoChoice==="rock"){
            paperTwo.textContent = "";
            scissorsTwo.textContent = "";
        }
        else if(playerTwoChoice==="scissors") {
            rockTwo.textContent = "";
            paperTwo.textContent="";
        }
        else if (playerTwoChoice==="paper"){
            rockTwo.textContent = "";
            scissorsTwo.textContent = "";
        }
    }
}
}
function notClicked(player) {
    if (player === playerOneChoice) {
        if (paperOne.textContent !== "" && rockOne.textContent !== "" && scissorsOne.textContent!== "") {
            return true;
        }
        return false;
    }
    else if (player === playerTwoChoice) {
    if (paperTwo.textContent !== "" && rockTwo.textContent !== "" && scissorsTwo.textContent!== "") {
        return true;
    }
    return false
}
}
function determineWinner(p1, p2) {
    if (p1 ==="rock") {
        if (p2==="scissors") {
            return "p1";
        }
        else if (p2 === "paper") {
            return "p2";
        }
        else {
            return "draw";
        }
    }
    else if (p1==="paper") {
        if (p2==="scissors") {
            return "p2";
        }
        else if (p2==="rock") {
            return "p1";
        }
        else {
            return "draw";
        }
    }
    else if (p1==="scissors") {
        if(p2 === "paper") {
            return "p1";
        }
        else if (p2 === "rock") {
            return "p2";
        }
        else {
            return "draw";
        }
    }
    else {
        return "missing choice";
    }
}
function showWinner() {
    if (winner === "p1") {
        if (playerOneChoice==="rock") 
        rockOne.style.color = "green";

        else if(playerOneChoice ==="scissors")
            scissorsOne.style.color = "green";

        else if (playerOneChoice ==="paper")
            paperOne.style.color = "green";
    }
    else if (winner === "p2") {
        if (playerTwoChoice==="rock")
        rockTwo.style.color = "green";

    else if(playerTwoChoice ==="scissors")
        scissorsTwo.style.color = "green";

    else if (playerTwoChoice ==="paper")
        paperTwo.style.color = "green";
    }
}

