
let result= 0
let cards= []
let hasBlackJack= false
let isAlive= false
let message= ""
let player = {
  name: "yamen" ,
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player .name + ": $" + player .chips
let messageEl= document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")

console.log(messageEl)
let sumEl = document.getElementById("sum-el")
console.log(sumEl)
function getRandomCard() {
   let randomNumber =  Math.floor(Math.random() * 13) + 1
   if (randomNumber === 1) {
  return 11
}
else if (randomNumber > 10) {
  return 10
}
else {
  return randomNumber
}
}
function startGame() {
  isAlive = true
   num1= getRandomCard()
 num2 = getRandomCard()
 result= num1 + num2
 cards= [num1 , num2]
 
  renderGame()
}
function renderGame() {
  if (result <= 20) {


message=  "do you want to draw another card "
}
else if (result === 21) {
  message="you have got a blackjack"
  hasBlackJack= true
}  
else {
  message= "you are out of the game"
  isAlive= false
}
console.log(message)
console.log(hasBlackJack)
console.log(isAlive)
messageEl.innerText = message
sumEl.innerText= "sum:" + result
cardsEl.textContent= "cards: " 
for(let i =0 ; i< cards.length ; i+=1) {
  cardsEl.textContent+=cards[i] + " "
}
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log("draw a new card from the deck")
  let pro = getRandomCard()
  result += pro
  cards.push(pro)
  console.log(cards)
  renderGame()
  }

  

  }
  
   
    

  
