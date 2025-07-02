const dayEl = document.querySelector('#day')
const hourEl = document.querySelector('#hour')
const minEl = document.querySelector('#min')
const secEl = document.querySelector('#sec')


const newYear =new Date('Jan 1, 2026 00:00:00').getTime()

updateCountDown()

function updateCountDown(){
  const now = new Date().getTime()
  const gap = newYear - now
  
  const sec = 1000;
  const min = sec * 60
  const hour = min * 60
  const day = hour * 24

  const d = Math.floor(gap/day)
  const h = Math.floor((gap%day)/hour)
  const m = Math.floor((gap % hour) / min)
  const s = Math.floor((gap% min)/sec)

  dayEl.innerHTML = d
  hourEl.innerHTML = h
  minEl.innerHTML = m
  secEl.innerHTML = s
  setTimeout(updateCountDown, 1000);
}