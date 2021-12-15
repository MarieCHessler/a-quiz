//Constants for Quiz
const pointsForCorrectAnswer = 1;
const numberOfQuestions = 5;

// Variables for Quiz
let presentQuestion = {};
let questionCounter = 0;
let score = 0;
let remainingQuestions = [];

let questions = [
    {
        "quiz-question": "What is the main focus of this project?",
        "answer1": "CSS",
        "answer2": "JavaScript",
        "answer3": "HTML",
        "correctAnswer": "2"
    },

    {
        "quiz-question": "What is this project about?",
        "answer1": "Creating a game",
        "answer2": "Creating an e-book",
        "answer3": "Creating a web shop",
        "correctAnswer": "1"
    },

    {
        "quiz-question": "When is the deadline?",
        "answer1": "December 24",
        "answer2": "January 1",
        "answer3": "December 11",
        "correctAnswer": "3"
    },

    {
        "quiz-question": "What theme does the quiz have",
        "answer1": "Music",
        "answer2": "Disney",
        "answer3": "Animals",
        "correctAnswer": "3"
    },

    {
        "quiz-question": "How many answers do you have to choose from?",
        "answer1": "Three",
        "answer2": "Two",
        "answer3": "One",
        "correctAnswer": "1"
    },

    {
        "quiz-question": "How difficult is JavaScript?",
        "answer1": "Not at all",
        "answer2": "Very",
        "answer3": "A little",
        "correctAnswer": "2"
    }
];