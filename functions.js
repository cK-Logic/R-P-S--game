


const gamemove = document.querySelectorAll("#gamemove")
var playermove = document.querySelector("#pchoice")
var computermove = document.querySelector("#cchoice")
var showing = document.getElementById("showing")

let player;
let computer;
let result;

let playerscores = 0
let computerscores = 0




gamemove.forEach(button =>
  button.addEventListener("click", function() {

  player = button.textContent;
  computerturn();
  playermove.textContent = player;
  computermove.textContent = computer;
  document.querySelector("h1").innerHTML = checkresults();
  document.getElementById("playerscore").innerHTML = playerscores
  document.getElementById("computerscore").innerHTML = computerscores
}));

function computerturn() {
  numero = Math.floor(Math.random() * 3) + 1

  switch (numero) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}


function checkresults() {
  if (player == computer) {
    showing.classList.remove("win", "lost")
    showing.classList.add("tie")
    return "It's a Tie";
  }
  else if (
    (player == "Rock" && computer == "Scissors") ||
    (player == "Paper" && computer == "Rock") ||
    (player == "Scissors" && computer == "Paper")) {

    playerscores ++
    showing.classList.remove("tie", "lost")
    showing.classList.add("win")
    return "You Win";
  }
  else {
    computerscores ++
    showing.classList.remove("tie", "win")
    showing.classList.add("lost")
    return "You Lost";
  }
}

