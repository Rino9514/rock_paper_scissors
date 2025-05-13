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

function playGame() {
    for (let step = 0; step < 5; step++) {
        // Runs 5 times, with values of step 0 through 4.
        playRound(getHumanChoice(),getComputerChoice());
    }
    playRound(getHumanChoice(),getComputerChoice());
    return humanScore > computerScore ? "Vous avez gagné " + humanScore + "-" + computerScore
         : humanScore < computerScore ? "Vous avez perdu " + humanScore + "-" + computerScore
         : "Match nul " + humanScore + "-" + computerScore;
}

const container = document.querySelector("div");

container.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.dataset.btn) {
        case 'rock':
            playRound(target.dataset.btn,getComputerChoice());
            break;
        case 'paper':
            playRound(target.dataset.btn,getComputerChoice());
            break;
        case 'scissors':
            playRound(target.dataset.btn,getComputerChoice());
            break;
    }
})


// console.log(playGame());