let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // 0 = rock, 1 = paper, 2 or others = scissors
    let choice = (Math.floor(Math.random() * 3));
    return choice === 0 ? "rock"
         : choice === 1 ? "paper"
         : "scissors";    
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors ?\n(if wrong default is scissors) : ");
    return choice.toLowerCase() === "rock"  ? "rock"
         : choice.toLowerCase() === "paper" ? "paper"
         : "scissors";    
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice );
        ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice );
        ++humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice );
        ++humanScore;
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a draw ! both get : "+ computerChoice );
    }
    else {
        console.log("You lose ! Your choice : " + humanChoice + " get beaten by computer choice : " + computerChoice );
        ++computerScore;
    }
    console.log("Human score : " + humanScore + " Computer score : " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
