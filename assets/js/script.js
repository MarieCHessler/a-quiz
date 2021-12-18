let question;
let choices;
let choice;
let questionCounterDiv;

// Event Listener for whole window
window.addEventListener('DOMContentLoaded', (event) => {
  // Constants
  question = document.getElementById('question');
  choices = Array.from(document.getElementsByClassName('choice'));
  questionCounterDiv = document.getElementById('question-counter');
  choice = document.getElementsByClassName('choice');

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
  question.innerText = presentQuestion['question'];
  /*for (let i = 0; i<3; i++){
    choices[i].innerText = presentQuestion[`choice${i+1}`];
  }*/
  // Used questions removed
  remainingQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = presentQuestion['choice' + number];
    choice.addEventListener('click', e => {
      if (!acceptingAnswers) return;
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number'];
      const correctAnswer = selectedAnswer == presentQuestion.correctAnswer ? 'correct' : 'incorrect';
      if (correctAnswer == 'correct') {
        scoreCounter++;
      };
      //selectedChoice.parentElement.classList.add(correctAnswer);
      getNextQuestion();
    });
  });
};