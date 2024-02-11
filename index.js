const guessBox = document.getElementById("input");
const guessButton = document.getElementById("submit");
const output = document.getElementById("output");
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log("You cheater! The answer is " + answer + ". Next time I won't let that slide. >:(");

let attemps = 0;
let guess;
let running = true;

while(running){
guessButton:onclick = function(){
  guess = guessBox.value;
  if(guess < minNum || guess > maxNum){
    output.textContent = "Please enter a number between " + minNum + " and " + maxNum + ".";
  }
  else if(guess < answer){
    output.textContent = "Too low!";
    attemps++;
  }
  else if(guess > answer){
    output.textContent = "Too high!";
    attemps++;
  }
  else if(guess == answer){
    output.textContent = "You got it! It took you " + attemps + " attemps.";
    running = false;
  }
  else{
    output.textContent = "Please enter a number.";
  }
}
  running = false
}