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

function game() {
  const TOTAL_ROUNDS = 5;
  let playerScore = 0;
  let computerScore = 0;
 
  console.log("=== ROCK, PAPER, SCISSORS — 5 Rounds ===\n");
 
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    const round = i + 1;
    const playerSelection = getPlayerSelection();
 
    if (playerSelection === null) {
      console.log("Game cancelled.");
      alert("Game cancelled. Refresh to play again.");
      return;
    }
 
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
 
    if (result.startsWith("You win")) playerScore++;
    else if (result.startsWith("You lose")) computerScore++;
 
    console.log(`Round ${round}: ${result} | Score — You: ${playerScore} | Computer: ${computerScore}`);
 
    alert(
      `Round ${round} of ${TOTAL_ROUNDS}\n\n${result}\n\nScore — You: ${playerScore} | Computer: ${computerScore}`
    );
  }
 
  let finalResult;
  if (playerScore > computerScore) finalResult = "You win the match!";
  else if (computerScore > playerScore) finalResult = "Computer wins the match!";
  else finalResult = "It's a draw!";
 
  console.log(`\n=== FINAL RESULT ===`);
  console.log(`${finalResult} You: ${playerScore} | Computer: ${computerScore}`);
  alert(`${finalResult}\n\nFinal Score — You: ${playerScore} | Computer: ${computerScore}`);
}

game();