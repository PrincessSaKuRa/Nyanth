let score = 0;
let buttonClickCount = 0;
const targetScore = 8;
const winningCode = 8272;
const totalButtons = 20;
const winButtons = 10; // 50% win rate

// initialize the game board
function initGame() {
    const gameboard = document.getElementById('gameboard');
    gameboard.innerHTML = '';
    let buttons = [];
    for (let i = 0; i < totalButtons; i++) {
        buttons.push(i < winButtons);
    }
    buttons.sort(() => Math.random() - 0.5); // shuffle the buttons

    for (let i = 0; i < totalButtons; i++) {
        const button = document.createElement('div');
        button.className = 'button hidden';
        button.onclick = () => clickButton(button, buttons[i]);
        gameboard.appendChild(button);
    }
}

// handle the button click event
function clickButton(button, isWin) {
    buttonClickCount++;
    button.classList.remove('hidden');
    if (isWin) {
        score++;
        button.style.backgroundImage = 'url("payusa.png")';
    } else {
        score--;
        button.style.backgroundImage = 'url("gibsusa.png")';
    }
    button.onclick = null; // disable further clicking
    document.getElementById('score').innerText = `Score: ${score}`;

    if (buttonClickCount === 10) {
        showResult();
    }
}

// show the game result
function showResult() {
    const result = document.getElementById('result');
    if (score >= targetScore) {
        result.innerText = `Congratulations! Your code is: ${winningCode}`;
    } else {
        result.innerText = 'Sorry, you didn\'t reach the target score.';
    }
}

// start button onclick event
document.getElementById('startButton').onclick = () => {
    score = 0;
    buttonClickCount = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('result').innerText = '';
    initGame();
};