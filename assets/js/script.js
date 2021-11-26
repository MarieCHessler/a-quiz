/* Constant references */
const question = document.getElementById('question');
const answerAlternatives = document.getElementsByClassName('answer-alternative')

fetch ('https://opentdb.com/api.php?amount=50&category=27&type=multiple')