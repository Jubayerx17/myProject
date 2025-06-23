 const container = document.querySelector('.container')

 const apple = document.querySelector('.apple')
 const samsung = document.querySelector('.samsung')


 apple.addEventListener('mouseenter', ()=>{
  container.classList.add('activeLeft')
 })
 apple.addEventListener('mouseleave', ()=>{
  container.classList.remove('activeLeft')
 })

 samsung.addEventListener('mouseenter', ()=>{
  container.classList.add('activeRight')
 })
  samsung.addEventListener('mouseleave', ()=>{
  container.classList.remove('activeRight')
 })