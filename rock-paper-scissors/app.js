let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() *3 );
    return choices[randomNumber];
}

function userWin(computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Computer chose ${computer}. You win!!!`;
}
function computerWin(computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Computer chose ${computer}. You lose.`;
}
function draw(computer) {
    result_p.innerHTML = `Computer also chose ${computer}. It's a tie.`;
}

function games(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userWin(computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            computerWin(computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => games("rock"));
    
    paper_div.addEventListener('click', () => games("paper"));
    
    scissors_div.addEventListener('click', () => games("scissors"));

}

main();