const monthName = document.querySelector('.monthName')
const dayName = document.querySelector('.dayName')
const dayNum = document.querySelector('.dayNum')
const year = document.querySelector('.year')


const date = new Date();


monthName.innerText = date.toLocaleString("en",{
  month:'long'}
)
dayName.innerText = date.toLocaleString('en',{
  weekday: 'long'
})

dayNum.innerText = date.getDate()

year.innerText = date.getFullYear()
