// script.js

let score = 0;
let timeLeft = 30;
let currentLetter = "";
let timer;

let messageElement = document.getElementById("message");
let targetLetterElement = document.getElementById("target-letter");
let inputField = document.getElementById("input-field");
let scoreElement = document.getElementById("score");
let timerElement = document.getElementById("timer");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function startGame() {
    inputField.disabled = false;
    inputField.focus();
    score = 0;
    timeLeft = 30;
    updateScore();
    updateTimer();
    generateNewLetter();
    startTimer();
}

function generateNewLetter() {
    // ランダムにアルファベットを選ぶ
    currentLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    targetLetterElement.textContent = currentLetter;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function updateTimer() {
    timerElement.textContent = `残り時間: ${timeLeft}秒`;
}

function updateScore() {
    scoreElement.textContent = `スコア: ${score}`;
}

function endGame() {
    messageElement.textContent = `ゲーム終了！あなたのスコアは ${score} です。`;
    inputField.disabled = true;
}

inputField.addEventListener("input", function() {
    if (inputField.value.toUpperCase() === currentLetter) {
        score++;
        updateScore();
        generateNewLetter();
        inputField.value = ""; // 入力フィールドをクリア
    }
});

// ゲーム開始
startGame();

