// Rock Paper Scissors — Allen Muzorera
 
const VALID_CHOICES = ["rock", "paper", "scissors"];
 
function computerPlay() {
  const choice = VALID_CHOICES[Math.floor(Math.random() * 3)];
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function getPlayerSelection() {
  while (true) {
    const input = prompt("Your move! Type: Rock, Paper, or Scissors");
 
    if (input === null) return null;
 
    const choice = input.trim().toLowerCase();
 
    if (VALID_CHOICES.includes(choice)) {
      return choice.charAt(0).toUpperCase() + choice.slice(1);
    }
 
    alert(`"${input}" is not valid. Please type Rock, Paper, or Scissors.`);
  }
}
 
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
 
  if (player === computer) return `It's a tie! You both chose ${playerSelection}.`;
 
  const winsAgainst = { rock: "scissors", scissors: "paper", paper: "rock" };
 
  if (winsAgainst[player] === computer) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
 
  return `You lose! ${computerSelection} beats ${playerSelection}.`;
}