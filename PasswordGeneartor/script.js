const passwordBox = document.querySelector(".password");
const length = 12;
const generatePass = document.querySelector(".generatePass");
const copyBtn = document.querySelector(".copyBtn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}[]";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

generatePass.addEventListener("click", () => {
  createPassword();
});

function copyFromInput() {
  const password = document.querySelector('.password')
  navigator.clipboard
    .writeText(password.value)
    // .then(() => {
    //   alert("Copied!");
    // })
    // .catch((err) => {
    //   console.error("Error copying: ", err);
    // });
}

copyBtn.addEventListener('click',()=>{
  copyFromInput()
})