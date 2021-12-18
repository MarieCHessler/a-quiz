let question;
let choices;
let questionCounterDiv;

// Event Listener for whole window
window.addEventListener('DOMContentLoaded', (event) => {
  // Constant references for Quiz
  question = document.getElementById('question');
  choices = Array.from(document.getElementsByClassName('choice'));
  questionCounterDiv = document.getElementById('question-counter');

    for (btn in choices) {
      checkAnswer();
      console.log(btn);
    }

  startQuiz();
});

// Restart Quiz
startQuiz = () => {
  questionCounter = 0;
  score = 0;
  remainingQuestions = [...questions];
  getNextQuestion();
};

getNextQuestion = () => {
  questionCounter++;
  let questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  presentQuestion = remainingQuestions[questionIndex];
  question.innerText = presentQuestion['question'];
  for (let i = 0; i<3; i++){
    choices[i].innerText = presentQuestion[`choice${i+1}`];
  }
  questionCounterDiv.innerText = `${questionCounter}/${questions.length}`;
};

checkAnswer = (e) => {
  if(correctAnswer == userAnswer) {
    score++;
    getNextQuestion();
  } else {
    getNextQuestion();
  }
}

//fetch ('https://opentdb.com/api.php?amount=50&category=27&type=multiple')