// Constant references for Quiz
const question = document.getElementById("question");
const answerAlternatives = Array.from(document.getElementsByClassName("answer-alternative"));

// Variables for Quiz
let presentQuestion = {}
let questionCounter = 0;
let score = 0;

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
    }
]

//Constants for Quiz
const pointsForCorrectAnswer = 1;
const numberOfQuestions = 5;

}

//fetch ('https://opentdb.com/api.php?amount=50&category=27&type=multiple')