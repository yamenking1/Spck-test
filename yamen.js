// Initialize score with localStorage data OR use default values
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
console.log()

let result=""
function startGame(player  ){
  const computerMove=computer()
  if(player === "rock"){
  if(computerMove === "rock"){
    result="tie"
    
  }
  else if(computerMove=== "paper"){
  result="computerWins"
  
  }
  else{
    result="playerWins"
    
  }
  }
  if(player === "paper"){
    if(computerMove === "rock"){
      result="playerWins"
      
    }
    else if(computerMove === "paper") {
      result="tie"
      
    }
    else {
      result="computerWins"
      
    }
  }
  if(player === "scissors") {
    if(computerMove === "rock"){
      result="computerWins"
      
    }
    else if(computerMove === "paper"){
      result="playerWins"
      
    }
    else{
      result="tie"
    }
    } 
    if(result=== "playerWins"){
      score.wins+=1
    }
    else if(result=== "computerWins"){
      score.loses+=1
    }
    else if(result==="tie") {
      score.ties+=1;
    }
  localStorage.setItem('score' ,JSON.stringify(score))
  alert(`player chose&&  ,${player} computer chose ,  ${computerMove} ,and ,  ${result} ,  ${score.wins}  , ${score.loses}, ${score.ties}`)

}
function computer() {
  let computerMove=Math.random()
  if(computerMove>0 && computerMove<1/3){
computerMove="rock" 
  
}
else if(computerMove> 1/3 && computerMove< 2/3){
  computerMove="paper"
}
else{
  computerMove="scissors"
}
return computerMove
}
function resetScore() {
  score.wins=0
  score.loses=0
  score.ties=0
  localStorage.removeItem('score')
}

