let myLeads= [ ]
const inputEl= document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")


const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click" , function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  console.log(myLeads)
  renderLeads()
})
function renderLeads() {
let listItems =""
for(let i = 0 ; i < myLeads.length ; i++) {
  listItems += "<li> <a href= '#' target='blank'>" + 
  myLeads[i] + "</a> </li>"
  ulEl.innerHTML = listItems
}
}
