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
        "answer-alternative1": "CSS",
        "answer-alternative2": "JavaScript",
        "answer-alternative3": "HTML",
        "answer": "2"
    },

    {
        "quiz-question": "What is this project about?",
        "answer-alternative1": "Creating a game",
        "answer-alternative2": "Creating an e-book",
        "answer-alternative3": "Creating a web shop",
        "answer": "1"
    },

    {
        "quiz-question": "When is the deadline?",
        "answer-alternative1": "December 24",
        "answer-alternative2": "January 1",
        "answer-alternative3": "December 11",
        "answer": "3"
    },

    {
        "quiz-question": "What theme does the quiz have",
        "answer-alternative1": "Music",
        "answer-alternative2": "Disney",
        "answer-alternative3": "Animals",
        "answer": "3"
    },

    {
        "quiz-question": "How many answers do you have to choose from?",
        "answer-alternative1": "Three",
        "answer-alternative2": "Two",
        "answer-alternative3": "One",
        "answer": "1"
    },

    {
        "quiz-question": "How difficult is JavaScript?",
        "answer-alternative1": "Not at all",
        "answer-alternative2": "Very",
        "answer-alternative3": "A little",
        "answer": "2"
    }
];