/* The following tutorials have been used as inspiration on how build a quiz:

Title: Create a Multiple Choice Quiz App Using JavaScript <br>
Author: *Code Explained* <br>
Date: Oct 18, 2018 <br>
URL: https://www.youtube.com/watch?v=49pYIMygIcU

Title: Creating a Basic Quiz - JavaScript Tutorial <br>
Author: *Zenva* <br>
Date: Dec 15, 2020 <br>
URL: https://www.youtube.com/watch?v=RswgVWKJRLM

Title: Build a Quiz App with HTML, CSS, and JavaScript <br>
Author: *James Q Quick* <br>
Date: Feb 18, 2019 <br>
URL: https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx */

let question;
let choices;
let questionCounterDiv;
let scoreCounterDiv;

// Check that DOM content is loaded before quiz starts
window.addEventListener('DOMContentLoaded', () => {
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

// Handle questions and choices
getNextQuestion = () => {
  //When no questions left, save score to local storage and move to Score page
  if (remainingQuestions.length === 0 || questionCounter >= numberOfQuestions) {
    localStorage.setItem('latestScore', `${scoreCounter}`);
    return window.location.assign('score.html');
  }

  // Progress  
  questionCounter++;
  questionCounterDiv.innerText = `${questionCounter}/${numberOfQuestions}`;

  // Present question and choices
  let questionIndex = Math.floor(Math.random() * remainingQuestions.length);
  presentQuestion = remainingQuestions[questionIndex];
  question.innerHTML = presentQuestion.question;

  // Remove used questions
  remainingQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
  
  // Present choices
  choices.forEach(choice => {
    const number = choice.dataset.number;
    choice.innerHTML = presentQuestion['choice' + number];
    
    // Check answers by click event and increment score if correct
    choice.addEventListener('click', event => {
      if (!acceptingAnswers) return;
      acceptingAnswers = false;
      const selectedChoice = event.target;
      const selectedAnswer = selectedChoice.dataset.number;
      const correctAnswer = selectedAnswer == presentQuestion.correctAnswer ? 'correct' : 'incorrect';
      if (correctAnswer == 'correct') {
        scoreCounter++;
        scoreCounterDiv.innerText = `${scoreCounter}`;
      }else{
        scoreCounterDiv.innerText = `${scoreCounter}`;
      }
    });
  });
};