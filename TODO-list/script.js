const inputBox = document.querySelector("#inputBox")

const listContainer = document.querySelector("#listContainer")

function addTask(){
  if (inputBox.value === '') {
    alert("You must write something")
  }
  else{
    let liItem = document.createElement("li")
    liItem.innerHTML = inputBox.value;
    listContainer.appendChild(liItem)
    let spanItem = document.createElement("span")
    spanItem.innerHTML = "\u00d7"
    liItem.appendChild(spanItem)
  }
  inputBox.value = ''
  saveData();
}


listContainer.addEventListener("click", (e)=>{
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked")
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
  
},false)



function saveData() {
  localStorage.setItem("data",listContainer.innerHTML)
}


function showTask(){
  listContainer.innerHTML = localStorage.getItem('data')
}
showTask(); 