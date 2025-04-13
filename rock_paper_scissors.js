function getComputerChoice() {
    // 0 = rock, 1 = paper, 2 or others = scissors
    let choice = (Math.floor(Math.random() * 3));
    return choice === 0 ? "rock"
         : choice === 1 ? "paper"
         : "scissors";    
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors ?\n(if wrong default is scissors) : ");
    return choice === "rock"  ? "rock"
         : choice === "paper" ? "paper"
         : "scissors";    
}

console.log(getComputerChoice());
console.log(getHumanChoice());