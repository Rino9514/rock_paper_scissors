let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("div");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");

container.addEventListener("click", (event) => {
    let target = event.target;

    if (target.dataset.btn === 'rock' || target.dataset.btn === 'paper' || target.dataset.btn === 'scissors'){
            playRound(target.dataset.btn,getComputerChoice());
    }
    if (humanScore === 5 || computerScore === 5) {
        humanScore > computerScore ? third.textContent = "Vous avez gagné " + humanScore + "-" + computerScore
        : third.textContent ="Vous avez perdu " + humanScore + "-" + computerScore;
        fourth.textContent = "Pour rejouer il suffira de recliquer sur un bouton";
        humanScore = 0;
        computerScore = 0;
    }
    else{
        third.textContent = "";
        fourth.textContent = "";
    }
})


function getComputerChoice() {
    // 0 = rock, 1 = paper, 2 or others = scissors
    let choice = (Math.floor(Math.random() * 3));
    return choice === 0 ? "rock"
         : choice === 1 ? "paper"
         : "scissors";    
}

function playRound(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        // console.log("You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice );
        first.textContent = "You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice ;
        ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        // console.log("You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice );
        first.textContent = "You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice ;
        ++humanScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        // console.log("You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice );
        first.textContent = "You win ! Your choice : " + humanChoice + " beat the computer choice : " + computerChoice ;
        ++humanScore;
    }
    else if (humanChoice === computerChoice) {
        // console.log("It's a draw ! both get : "+ computerChoice );
        first.textContent = "It's a draw ! both get : "+ computerChoice ;
    }
    else {
        first.textContent = "You lose ! Your choice : " + humanChoice + " get beaten by computer choice : " + computerChoice ;
        // console.log("You lose ! Your choice : " + humanChoice + " get beaten by computer choice : " + computerChoice );
        ++computerScore;
    }
    second.textContent = "Human score : " + humanScore + " Computer score : " + computerScore;
}
