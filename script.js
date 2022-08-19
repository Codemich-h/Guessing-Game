'use strict';
/*document.querySelector(".guessing").textContent = "🎉 correct Number!";
document.querySelector(".number").textContent = "10"
document.querySelector(".label-score").textContent = "💯 Score: 15";
document.querySelector(".label-highscore").textContent = "🥉 Highscore: 17";
document.querySelector(".guess").value = "30";
*/


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
    const finalGuess = Number(document.querySelector('.guess').value);
    console.log(finalGuess, typeof finalGuess);

    //When there is no input
    if(!finalGuess) {
        document.querySelector(".guessing").textContent = "🛑 No Number....";    
    } 
    //When secrete Number is equal
    else if(finalGuess === secretNumber) {
        document.querySelector(".guessing").textContent = "🎉 correct Number!"; 
         // Change of Backgroung Color
        document.querySelector("body").style.bg = "#a3e635";
        document.querySelector(".guessing").style.bg = "36rem";
    } 

    //when Scret Number is greater
    else if (finalGuess > secretNumber) {
        if (score > 0) {
            document.querySelector('.guessing').textContent = "📈 Number is too High!";
        score--;
        document.querySelector(".score").textContent = `💯 Score: ${score}`;
        } else {
            document.querySelector(".guessing").textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = `💯 Score: ${score}`;
        }
        //when Scret Number is less
    } else if (finalGuess < secretNumber) {
        document.querySelector(".guessing").textContent = "📉 Number is low";
        score--;
        document.querySelector(".score").textContent = `💯 Score: ${score}` ;
    } 
});







