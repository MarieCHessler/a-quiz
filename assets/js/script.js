let quizQuestion;
let answers;
let questionCounterDiv;

// Event Listener for whole window
window.addEventListener('DOMContentLoaded', (event) => {
  // Constant references for Quiz
  quizQuestion = document.getElementById("quiz-question");
  answers = Array.from(document.getElementsByClassName("answer"));
  questionCounterDiv = document.getElementById("question-counter");

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
    quizQuestion.innerText = presentQuestion ["quiz-question"];
    for (let i = 0; i<3; i++){
      answers[i].innerText = presentQuestion[`answer${i+1}`];
    }
    questionCounterDiv.innerText = `${questionCounter}/${questions.length}`;
};

//fetch ('https://opentdb.com/api.php?amount=50&category=27&type=multiple')