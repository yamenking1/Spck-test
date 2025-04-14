function increment() {
  console.log("clicked")

}
let countEl= document.getElementById("count-el")
console.log(countEl)
let count=0
function increment() {
  count += 1
  countEl.innerText= count
  console.log(count)
}

function save(){
console.log(count)
}
saveEl= document.getElementById("save-el")
console.log(saveEl)
function save() {
  let save = count + "  -  "
  
  saveEl.textContent+= save
  countEl.textContent=0
  count=0
  console.log(save)
}


