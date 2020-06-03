function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter choice: (Rock, Paper, or Scissors");
    playerSelection.toLowerCase();
    if (playerSelection===computerSelection)
        return("Draw!")
    else if (playerSelection==='rock' && computerSelection === 'scissors')
        return ("You win!");
    else if (playerSelection==='rock' && computerSelection === 'paper')
        return("You lose!");
    else if (playerSelection==='scissors' && computerSelection ==='paper')
        return("You win!");
    else if (playerSelection==='scissors' && computerSelection==='rock')
        return("You lose!");
    else if (playerSelection==='paper' && computerSelection==='rock')
        return('You win!');
    else if (playerSelection==='paper' && computerSelection==='scissors')
        return("You lose!");
    else 
        return("Invalid input. Lose by default!");  
        
}
function computerPlay() {
    let randomNum = Math.floor(Math.random() * Math.floor(3));
    let guess;
    if (randomNum===0) 
        guess = "rock";
    else if (randomNum===1)
        guess = "paper";
    else 
        guess = "scissors";
    return guess;
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
for (let i =0; i<=5; i++) {
    alert(playRound(playerSelection, computerSelection));
}


