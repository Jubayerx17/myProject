const startEl = document.querySelector('.start')
const stopEl = document.querySelector('.stop')
const resetEl = document.querySelector('.reset')
const timer = document.querySelector('.timer')

let interval 
let timeLeft = 2100;
function updateTimer() {
  let min = Math.floor(timeLeft/60)
  let sec = timeLeft % 60 
  let formattedTime = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
  timer.innerHTML = formattedTime
}
function startTimer() {
  interval = setInterval(() => {
    timeLeft--
    updateTimer()
    if (timeLeft === 0) {
      alert("Time's Up!")
      timeLeft = 2100
      updateTimer()
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval)
}
function resetTimer() {
  clearInterval(interval)
  timeLeft = 2100
  updateTimer()
}


 startEl.addEventListener('click',startTimer)
 stopEl.addEventListener('click',stopTimer)
 resetEl.addEventListener('click',resetTimer)