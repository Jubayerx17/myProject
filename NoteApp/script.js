const noteContainer = document.querySelector('.notesContainer')
const createBtn = document.querySelector('.createBtn')
let notes = document.querySelectorAll('.inputBox')


function showNotes() {
  noteContainer.innerHTML = localStorage.getItem('notes')
}
showNotes();

function updateStorage(){
  localStorage.setItem('notes',noteContainer.innerHTML)
}


createBtn.addEventListener('click',()=>{
  let inputBox = document.createElement('p')
  let img = document.createElement('img')
  inputBox.className = 'inputBox'
  inputBox.setAttribute('contenteditable','true')
  img.src = "images/delete.png"

  noteContainer.appendChild(inputBox).appendChild(img)
})

noteContainer.addEventListener('click',(e)=>{
  if (e.target.tagName === 'IMG' ) {
    e.target.parentElement.remove()
    updateStorage()
  }
  else if (e.target.tagName === 'P'){
    notes = document.querySelectorAll(".inputBox")
    notes.forEach(nt =>{
      nt.onkeyup = function(){
        updateStorage()
      }
    })
  }
})

