const textArea = document.querySelector('.textArea')
const counter = document.querySelector('.counter')


textArea.addEventListener('keyup',()=>{
  updateCounter()
})

function updateCounter() {
  counter.innerText = textArea.value.length
}