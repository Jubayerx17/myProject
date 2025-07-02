const btn = document.querySelector('.btn')
const date = document.querySelector('.date')
const result = document.querySelector('.result')

function calculateAge() {
  const bday = date.value
  if (bday === '') {
    alert('Plese enter your birthday')
  }
  else{
    const year = getAge(bday)
    console.log(year);
    result.innerHTML = `Your age is ${year} years old`
  }
}


function getAge(bday ) {
  const currentDate = new Date()
  const bdayDate = new Date(bday)
  let year = currentDate.getFullYear() - bdayDate.getFullYear()
  let months = currentDate.getMonth() - bdayDate.getMonth()

  if (months < 0 || (months === 0 && currentDate.getDate() < bdayDate.getDate())) {
    year--
  }
  return year
}


btn.addEventListener('click',calculateAge)

