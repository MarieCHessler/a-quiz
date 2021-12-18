//Constants and variables
const pointsForCorrectAnswer = 1;
const numberOfQuestions = 10;
let presentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let scoreCounter = 0;
let remainingQuestions = [];

let questions = [
    {
        "question": "Dummy 1.0?",
        "choice1": "Answer 1.0",
        "choice2": "Answer 1.1",
        "choice3": "Answer 1.2",
        "correctAnswer": "1"
    },

    {
        "question": "Dummy 1.1?",
        "choice1": "Answer 1.0",
        "choice2": "Answer 1.1",
        "choice3": "Answer 1.2",
        "correctAnswer": "2"
    },

    {
        "question": "Dummy 1.2?",
        "choice1": "Answer 1.0",
        "choice2": "Answer 1.1",
        "choice3": "Answer 1.2",
        "correctAnswer": "3"
    },

    {
        "question": "Dummy 1.3?",
        "choice1": "Answer 1.3",
        "choice2": "Answer 1.4",
        "choice3": "Answer 1.5",
        "correctAnswer": "1"
    },

    {
        "question": "Dummy 1.4?",
        "choice1": "Answer 1.3",
        "choice2": "Answer 1.4",
        "choice3": "Answer 1.5",
        "correctAnswer": "2"
    },

    {
        "question": "Dummy 1.5?",
        "choice1": "Answer 1.3",
        "choice2": "Answer 1.4",
        "choice3": "Answer 1.5",
        "correctAnswer": "3"
    },

    {
        "question": "Dummy 1.6?",
        "choice1": "Answer 1.6",
        "choice2": "Answer 1.7",
        "choice3": "Answer 1.8",
        "correctAnswer": "1"
    },

    {
        "question": "Dummy 1.7?",
        "choice1": "Answer 1.6",
        "choice2": "Answer 1.7",
        "choice3": "Answer 1.8",
        "correctAnswer": "2"
    },

    {
        "question": "Dummy 1.8?",
        "choice1": "Answer 1.6",
        "choice2": "Answer 1.7",
        "choice3": "Answer 1.8",
        "correctAnswer": "3"
    },

    {
        "question": "Dummy 1.9?",
        "choice1": "Answer 1.9",
        "choice2": "Answer 2.0",
        "choice3": "Answer 2.1",
        "correctAnswer": "1"
    },

    {
        "question": "Dummy 2.0?",
        "choice1": "Answer 1.9",
        "choice2": "Answer 2.0",
        "choice3": "Answer 2.1",
        "correctAnswer": "2"
    },

    {
        "question": "Dummy 2.1?",
        "choice1": "Answer 1.9",
        "choice2": "Answer 2.0",
        "choice3": "Answer 2.1",
        "correctAnswer": "3"
    },

    {
        "question": "Dummy 2.2?",
        "choice1": "Answer 2.2",
        "choice2": "Answer 2.3",
        "choice3": "Answer 2.4",
        "correctAnswer": "1"
    },

    {
        "question": "Dummy 2.3?",
        "choice1": "Answer 2.2",
        "choice2": "Answer 2.3",
        "choice3": "Answer 2.4",
        "correctAnswer": "2"
    },

    {
        "question": "Dummy 2.4?",
        "choice1": "Answer 2.2",
        "choice2": "Answer 2.3",
        "choice3": "Answer 2.4",
        "correctAnswer": "3"
    },

    {
        "question": "Dummy 2.5?",
        "choice1": "Answer 2.5",
        "choice2": "Answer 2.6",
        "choice3": "Answer 2.7",
        "correctAnswer": "1"
    },

    {
        "question": "Dummy 2.6?",
        "choice1": "Answer 2.5",
        "choice2": "Answer 2.6",
        "choice3": "Answer 2.7",
        "correctAnswer": "2"
    },

    {
        "question": "Dummy 2.7?",
        "choice1": "Answer 2.5",
        "choice2": "Answer 2.6",
        "choice3": "Answer 2.7",
        "correctAnswer": "3"
    },

    {
        "question": "Dummy 2.8?",
        "choice1": "Answer 2.8",
        "choice2": "Answer 2.9",
        "choice3": "Answer 3.0",
        "correctAnswer": "1"
    },

    {
        "question": "Dummy 2.9?",
        "choice1": "Answer 2.8",
        "choice2": "Answer 2.9",
        "choice3": "Answer 3.0",
        "correctAnswer": "2"
    },

    {
        "question": "Dummy 3.0?",
        "choice1": "Answer 2.8",
        "choice2": "Answer 2.9",
        "choice3": "Answer 3.0",
        "correctAnswer": "3"
    },
];