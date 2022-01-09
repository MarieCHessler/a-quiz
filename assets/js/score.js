// Constants for Score page
const finalScore = document.getElementById('final-score');
const latestScore = localStorage.getItem('latestScore'); // Gets score from local storage

// Place the score in the span situated in the H2 text
finalScore.innerText = latestScore;