const imgContainer = document.querySelector('.imgContainer')
const nextBtn = document.querySelector('#next')
const prevBtn = document.querySelector('#prev')

let x = 0
prevBtn.addEventListener('click',()=>{
  x += 45
  updateGallery()
})
nextBtn.addEventListener('click',()=>{
  x -= 45
  updateGallery()
})

function updateGallery(){
  imgContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}