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
function playGame(playerSelection,computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection,computerSelection);
    if(playerSelection == computerSelection)
    {
        return " It is a draw !"; 
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper' 
    || playerSelection == 'paper' && computerSelection == 'scissors'
    || playerSelection == 'scissors' && computerSelection =='rock')
    {
        return " Computer won!";
    }
    else
    {
        return "User won";
    }
    
}
function game()
{
    for(let i=0;i<5;i++)
    {
        const playerSelection = prompt("Enter rock, paper or scissors");
        let computerSelection = getComputerChoice(); 
        console.log(playGame(playerSelection,computerSelection));
    }
}
//console.log(getComputerChoice());
game();
//console.log(playGame(playerSelection,computerSelection));
