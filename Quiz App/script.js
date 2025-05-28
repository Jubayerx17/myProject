const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "How many legs does a spider have?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Lion", correct: true },
      { text: "Elephant", correct: false },
      { text: "Leopard", correct: false },
    ],
  },
  {
    question: "What do bees make?",
    answers: [
      { text: "Milk", correct: false },
      { text: "Honey", correct: true },
      { text: "Butter", correct: false },
      { text: "Jam", correct: false },
    ],
  },
  {
    question: "Which color is made by mixing red and white?",
    answers: [
      { text: "Pink", correct: true },
      { text: "Purple", correct: false },
      { text: "Orange", correct: false },
      { text: "Brown", correct: false },
    ],
  },
  {
    question: "How many days are there in a leap year?",
    answers: [
      { text: "365", correct: false },
      { text: "366", correct: true },
      { text: "364", correct: false },
      { text: "367", correct: false },
    ],
  },
  {
    question: "Which gas do humans need to breathe?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Which fruit is yellow and curved?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Banana", correct: true },
      { text: "Grapes", correct: false },
      { text: "Orange", correct: false },
    ],
  },
  {
    question: "Which shape has three sides?",
    answers: [
      { text: "Triangle", correct: true },
      { text: "Square", correct: false },
      { text: "Circle", correct: false },
      { text: "Rectangle", correct: false },
    ],
  },
];





const questionElem = document.querySelector(".question")
const answerBtn = document.querySelector(".answerBtn")
const nextBtn = document.querySelector("#nextBtn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){

  resetState();
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next"
  showQuestion();
}

function showQuestion(){
  resetState()
  let currentQuestion = questions[currentQuestionIndex]
  let questionNo = currentQuestionIndex + 1
  questionElem.innerHTML = questionNo + ". "+currentQuestion.question;

  currentQuestion.answers.forEach((ans)=>{
    const btn = document.createElement("button")
    btn.innerHTML = ans.text
    btn.classList.add("btn")
    answerBtn.appendChild(btn)
    if (ans.correct) {
      btn.dataset.correct = ans.correct
    }
    btn.addEventListener("click",selectAnswer)
  })
}

function resetState() {
  nextBtn.style.display = "none"
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild)
  }
}


function selectAnswer(e){
  const selectedBtn = e.target
  const isCorrect = selectedBtn.dataset.correct === "true" 
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
     selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add('correct')
    }
    button.disabled = true;
  })
  nextBtn.style.display = "block";

}

nextBtn.addEventListener('click',()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextBtn()
  }
  else startQuiz()
})

function handleNextBtn(){
  currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
    showQuestion()
  }
  else{
    showScore()
  }
}


function showScore() {
  resetState();
  questionElem.innerHTML = `You scored ${score} out of ${questions.length}!`
  nextBtn.innerHTML = "Play Again!!";
  nextBtn.style.display = "block"
}


startQuiz()