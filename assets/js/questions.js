//Constants and variables
const pointsForCorrectAnswer = 1;
const numberOfQuestions = 5;
let presentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let scoreCounter = 0;
let remainingQuestions = [];

let questions = [
    {
        "question": "What is the main focus of this project?",
        "choice1": "CSS",
        "choice2": "JavaScript",
        "choice3": "HTML",
        "correctAnswer": "2"
    },

    {
        "question": "What is this project about?",
        "choice1": "Creating a game",
        "choice2": "Creating an e-book",
        "choice3": "Creating a web shop",
        "correctAnswer": "1"
    },

    {
        "question": "When is the deadline?",
        "choice1": "December 24",
        "choice2": "January 1",
        "choice3": "December 11",
        "correctAnswer": "3"
    },

    {
        "question": "What theme does the quiz have",
        "choice1": "Music",
        "choice2": "Disney",
        "choice3": "Animals",
        "correctAnswer": "3"
    },

    {
        "question": "How many answers do you have to choose from?",
        "choice1": "Three",
        "choice2": "Two",
        "choice3": "One",
        "correctAnswer": "1"
    },

    {
        "question": "How difficult is JavaScript?",
        "choice1": "Not at all",
        "choice2": "Very",
        "choice3": "A little",
        "correctAnswer": "2"
    }
];