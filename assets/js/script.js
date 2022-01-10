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

//Constants and variables
const pointsForCorrectAnswer = 1;
const numberOfQuestions = 10;
let presentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let scoreCounter = 0;
let remainingQuestions = [];
let question;
let choices;
let questionCounterDiv;
let scoreCounterDiv;
let selectedChoice;

// Check that DOM content is loaded before quiz starts
window.addEventListener('DOMContentLoaded', () => {
  // Constants
  question = document.getElementById('question');
  choices = Array.from(document.getElementsByClassName('choice'));
  questionCounterDiv = document.getElementById('question-counter');
  scoreCounterDiv = document.getElementById('score-counter');

  startQuiz();
  document.getElementById("next-question").addEventListener("click", getNextQuestion);
});

// Restart Quiz
startQuiz = () => {
  questionCounter = 0;
  scoreCounter = 0;
  remainingQuestions = [...questions];
  getNextQuestion();
  createChoiceListeners();
};

function createChoiceListeners(){
  choices.forEach(choice => {
    // Check answers by click event and increment score if correct
    choice.addEventListener('click', event => {
      if (!acceptingAnswers) return;
      acceptingAnswers = false;
      selectedChoice = event.target;
      //Assigning the choice class to make it remain highlighted
      selectedChoice.classList.add("selectedChoice");
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
}

/* 
Handle questions and choices while getting the next question
Increment the number of questions
Present new questions and choices
Removes used questions and moves final score to local storage
*/
getNextQuestion = () => {
  //Stop the user from moving to the next question without selecting a choice
  if (acceptingAnswers && questionCounter !== 0) {
    return;
  }
  
  if (selectedChoice !== undefined) {
  selectedChoice.classList.remove("selectedChoice");
  }

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
  });
}