const form = document.getElementById("guess-form");
const input = document.getElementById("guess-input");
const result = document.getElementById("result");
const counter = document.getElementById("attempts-counter");
const playAgainBtn = document.getElementById("play-again-btn");

let min = 1;
let max = 100;

const storedMin = sessionStorage.getItem("min");
const storedMax = sessionStorage.getItem("max");

if (storedMin && storedMax) {
  min = parseInt(storedMin);
  max = parseInt(storedMax);
}

document.getElementById("form-title").textContent = `Guess a number between ${min} and ${max}`;

const secretNumber = generateNumber(min, max);
console.log("Secret:", secretNumber);

let attempts = 0;

function generateNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validateGuess(guess, target) {
  if (guess < target) {
    displayResult("Too low!", "blue");
  } else if (guess > target) {
    displayResult("Too high!", "red");
  } else {
    displayResult("Correct!", "green");
    form.reset();
    input.disabled = true;
    playAgainBtn.style.display = "inline-block";
  }
}

function displayResult(message, color) {
  result.textContent = message;
  result.style.color = color;
  result.classList.add("shake");
  setTimeout(() => result.classList.remove("shake"), 300);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userGuess = parseInt(input.value);
  if (isNaN(userGuess)) {
    displayResult("Please enter a valid number!", "orange");
    return;
  }

  attempts++;
  counter.textContent = `Attempt #${attempts}`;
  validateGuess(userGuess, secretNumber);
});

playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});