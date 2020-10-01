window.addEventListener("load", init);
const fr = document.querySelector("#difficulty");
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};

let time = 5;
let score = 0;
let isplaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
fr.addEventListener("change", () => {
  time = fr.value;
});

timeDisplay.innerHTML = time;

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

function init() {
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch() {
  if (matchWords()) {
    isplaying = true;
    time = fr.value + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function checkStatus() {
  if (!isplaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isplaying = false;
  }
  timeDisplay.innerHTML = time;
}
