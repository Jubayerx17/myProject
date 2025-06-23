const searchBtn = document.querySelector('.search')
const containerEl = document.querySelector('.container')

searchBtn.addEventListener('click', ()=>{
  containerEl.classList.toggle('active')
})

