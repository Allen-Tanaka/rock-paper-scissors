// Rock Paper Scissors — Allen Muzorera
 
const VALID_CHOICES = ["rock", "paper", "scissors"];
 
function computerPlay() {
  const choice = VALID_CHOICES[Math.floor(Math.random() * 3)];
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}