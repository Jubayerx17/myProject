const container = document.querySelector('.container')
 
for(let i = 0 ; i < 30; i++){
  const colorBoxEl = document.createElement('div')
  colorBoxEl.classList.add('colorBox')
  container.appendChild(colorBoxEl)
}

const colorBoxEls = document.querySelectorAll(".colorBox")
generateColor()

function generateColor() {
  colorBoxEls.forEach((colorBox)=>{
    const newColor = randomColor()
    colorBox.style.backgroundColor= newColor
    colorBox.innerText= newColor
  })
}



function randomColor() {
  const chars = '0123456789abcdef'
  const length = 6
  let color = '#'
  for(let i = 0; i<length; i++){
    const randomNum = Math.floor(Math.random()*16)
  color += chars[randomNum]
} 
return color;
}

