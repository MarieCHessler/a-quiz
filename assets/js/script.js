let quizQuestion;
let answerAlternatives;
let questionCounterDiv;

//Event Listener for whole window
window.addEventListener('DOMContentLoaded', (event) => {
  // Constant references for Quiz
  quizQuestion = document.getElementById("quiz-question");
  answerAlternatives = Array.from(document.getElementsByClassName("answer-alternative"));
  questionCounterDiv = document.getElementById("question-counter");

});

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    remainingQuestions = [...questions];
    getNextQuestion();
};

getNextQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * remainingQuestions.length);
      presentQuestion = remainingQuestions[questionIndex];
      quizQuestion.innerText = presentQuestion.quizQuestion;
};

startQuiz();

//fetch ('https://opentdb.com/api.php?amount=50&category=27&type=multiple')