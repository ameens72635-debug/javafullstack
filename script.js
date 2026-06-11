// Example data and simple output
let name = "Ameen";
let age = 19;
const height = 5.8;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Height: ${height}`);

let secretNumber = null;
let attemptCount = 0;
let gameActive = false;

function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    gameActive = true;
    clearOutput();
    writeMessage('Game started! Enter a number in the box below and click Submit Guess.', 'info');
    const input = document.getElementById('guess-input');
    if (input) {
        input.value = '';
        input.focus();
    }
}

function writeMessage(message, level = 'info') {
    console.log(message);
    const output = document.getElementById('guess-output');
    if (output) {
        const line = document.createElement('div');
        line.textContent = message;
        line.className = `notification ${level}`;
        output.appendChild(line);
    }
}

function clearOutput() {
    const output = document.getElementById('guess-output');
    if (output) {
        output.innerHTML = '';
    }
}

function runGuessFromInput() {
    const input = document.getElementById('guess-input');
    if (!input) {
        return;
    }

    if (!gameActive) {
        initGame();
    }

    if (!input.value) {
        writeMessage('Please enter a number in the box before clicking Submit Guess.', 'warning');
        return;
    }

    const guess = parseInt(input.value, 10);
    if (Number.isNaN(guess) || guess < 1 || guess > 100) {
        writeMessage('Enter a valid number between 1 and 100.', 'error');
        return;
    }

    attemptCount += 1;
    if (guess === secretNumber) {
        writeMessage(`Correct! The number is ${guess}.`, 'success');
        writeMessage(`You solved it in ${attemptCount} attempts.`, 'info');
        gameActive = false;
        return;
    }

    if (guess < secretNumber) {
        writeMessage(`Attempt ${attemptCount}: ${guess} is too small. Try a bigger number.`, 'warning');
    } else {
        writeMessage(`Attempt ${attemptCount}: ${guess} is too large. Try a smaller number.`, 'warning');
    }

    input.focus();
}

function sir() {
    console.log("hello world");
}

window.onload = initGame;
