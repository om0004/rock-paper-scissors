let player_score = 0;
let computer_score = 0;
function getRandomInt(number)
{
    return Math.floor(Math.random()*number);
    // Math.random() returns a number between 0 and 1, Math.floor() will round 2.27 to 2
}
function getComputerChoice()
{
    let choices = ['rock','paper','scissors'];
    let number = getRandomInt(3);
    return choices[number];
}
function resetGame()
{
    player_score = 0;
    computer_score = 0;

    let title = document.querySelector('.title');
    let message = document.querySelector('.message');
    title.textContent = "Choose your weapon";
    message.textContent = "First to score 5 points wins the game";

    let player_emoji= document.querySelector("#player");
    let computer_emoji = document.querySelector("#comp");
    player_emoji.textContent = "?";
    computer_emoji.textContent = "?";

    let scoreU = document.querySelector(".scoreUser");
    let scoreC = document.querySelector(".scoreComp");
    scoreC.textContent = `Computer: ${computer_score}`;
    scoreU.textContent = `Player: ${player_score}`;


}
function playGame(playerSelection,computerSelection)
{
    // playerSelection = playerSelection.toLowerCase();
    let title = document.querySelector('.title');
    let message = document.querySelector('.message');
    let scoreU = document.querySelector(".scoreUser");
    let scoreC = document.querySelector(".scoreComp");

    console.log(playerSelection,computerSelection);
    if(playerSelection === computerSelection)
    {
        title.textContent = "It's a tie!"
        message.textContent = `${playerSelection} ties with ${computerSelection}`;
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock')
    {
        title.textContent = "You lost!"
        message.textContent = `${playerSelection} is beaten by ${computerSelection}`;
        computer_score+=1;
        scoreC.textContent = `Computer: ${computer_score}`;
    }
    else
    {
        title.textContent = "You won!"
        message.textContent = `${playerSelection} beats ${computerSelection}`;
        player_score+=1;
        scoreU.textContent = `Player: ${player_score}`;
    }

    if(player_score == 5 || computer_score == 5)
    {
        let status = player_score == 5 ? "Won" : "Lost";
        if (confirm(` You ${status}, do you want to play again?`))
        {
            resetGame();
        }
        
        
    }

    
}
function findEmoji(selection)
{
    if(selection === 'rock') return "✊";
    else if (selection === 'paper') return "✋";
    else return "✌️";
}
function game(e)
{
    let playerSelection = e.target.id;
    // find value of clicked icon through ID
    let computerSelection = getComputerChoice();
    // random computer selection 
    let player_emoji= document.querySelector("#player");
    let computer_emoji = document.querySelector("#comp");

    player_emoji.textContent = findEmoji(playerSelection);
    computer_emoji.textContent = findEmoji(computerSelection);
    //change emoji on display

    playGame(playerSelection,computerSelection);

    
}
let click = document.querySelectorAll('.lower div');

click.forEach((button) =>
{
    button.addEventListener('click',game);
});

