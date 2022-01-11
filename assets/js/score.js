/* 
Inspiration on how to move the final score to the score page:
    
Title: Web Storage API <br>
Author: *W3Schools* <br>
Date: 2021 <br>
URL: https://www.w3schools.com/js/js_api_web_storage.asp
*/

// Constants for Score page
const finalScore = document.getElementById('final-score');
const latestScore = localStorage.getItem('latestScore'); // Gets score from local storage

// Place the score in the span situated in the H2 text
finalScore.innerText = latestScore;