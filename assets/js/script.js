let question;
let choices;
let questionCounterDiv;
let scoreCounterDiv;

// Event Listener for whole window
window.addEventListener('DOMContentLoaded', (event) => {
  // Constants
  question = document.getElementById('question');
  choices = Array.from(document.getElementsByClassName('choice'));
  questionCounterDiv = document.getElementById('question-counter');
  scoreCounterDiv = document.getElementById('score-counter');

  startQuiz();
});

// Restart Quiz
startQuiz = () => {
  questionCounter = 0;
  scoreCounter = 0;
  remainingQuestions = [...questions];
  getNextQuestion();
};

getNextQuestion = () => {
  if (remainingQuestions.length === 0 || questionCounter >= numberOfQuestions) {
    return window.location.assign('score.html');
  }

  // Progress  
  questionCounter++;
  questionCounterDiv.innerText = `${questionCounter}/${numberOfQuestions}`;
  let questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  presentQuestion = remainingQuestions[questionIndex];
  question.innerHTML = presentQuestion['question'];

  // Used questions removed
  remainingQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerHTML = presentQuestion['choice' + number];
    choice.addEventListener('click', e => {
      if (!acceptingAnswers) return;
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number'];
      const correctAnswer = selectedAnswer == presentQuestion.correctAnswer ? 'correct' : 'incorrect';
      if (correctAnswer == 'correct') {
        scoreCounter++;
        scoreCounterDiv.innerText = `${scoreCounter}`;
      }else{
        scoreCounterDiv.innerText = `${scoreCounter}`;
      };
    });
  });
};