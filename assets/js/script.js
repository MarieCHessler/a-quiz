// Constants for Quiz
const quizQuestion = document.getElementById("quiz-question");
const answerAlternatives = Array.from(document.getElementsByClassName("answer-alternative"));

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