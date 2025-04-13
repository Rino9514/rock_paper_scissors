function getComputerChoice() {
    // 0 = rock, 1 = paper, 2 or others = scissors
    let choices = (Math.floor(Math.random() * 3));
    return choices === 0 ? "rock"
         : choices === 1 ? "paper"
         : "scissors";    
}



console.log(getComputerChoice());
