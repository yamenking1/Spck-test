const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restart");
const winningConditions = [
  [0,5,10,15], [3,6,9,12], [0,4,8,12],
  [1,5,9,13], [2,6,10,14], [3,7,11,15],
  [0,1,2,3], [4,5,6,7], [8,9,10,11],
  [12,13,14,15]
];

let options = ["","","","","","","","","","","","","","","",""];
let currentPlayer = "x";
let running = false;

startGame();

function startGame(){
  for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener("click", cellClicked);
  }
  restartBtn.addEventListener("click", restart);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if(options[cellIndex] !== "" || !running) return;

  options[cellIndex] = currentPlayer;
  this.textContent = currentPlayer;
  
  checkWinner();
  if(running) changePlayer(); // Only switch if game continues
}

function changePlayer(){
  currentPlayer = (currentPlayer === "x") ? "o" : "x";
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
  let roundWon = false;
  
  for(let i = 0; i < winningConditions.length; i++){
    const condition = winningConditions[i];
    // Correct indices [0,1,2,3] for 4-cell combinations
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];
    const cellD = options[condition[3]];

    if(cellA === "" || cellB === "" || cellC === "" || cellD === "") continue;
    
    if(cellA === cellB && cellB === cellC && cellC === cellD){
      roundWon = true;
      break;
    }
  }

  if(roundWon){
    statusText.textContent = `${currentPlayer} has won!`;
    running = false;
  }
  else if (!options.includes("")) {
    statusText.textContent = "DRAW!";
    running = false;
  }
  // Removed else block with changePlayer()
}

function restart(){
  options = ["","","","","","","","","","","","","","","",""];
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "x";
  running = true;
  statusText.textContent = `${currentPlayer}'s turn`;
}