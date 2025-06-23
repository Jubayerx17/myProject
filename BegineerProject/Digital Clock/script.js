const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')


function updateClock() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let amPmEl = 'PM'
    if (h > 12) {
      h = h - 12
      amPmEl = 'PM'
    }

  h = h < 10 ? '0' + h: h;
  m = m < 10 ? '0' + m: m;
  s = s < 10 ? '0' + s: s;

  hour.innerText = h
  min.innerText = m
  sec.innerText = s
  amPm.innerText = amPmEl
}


setInterval(() => {
  updateClock() 
}, 1000);