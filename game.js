
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];

//add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.round(Math.random() * 4);

    if (computerSelection === 1) {
        computerSelection = 'Rock';
    } else if (computerSelection === 2) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    let result = checkWinner(playerSelection, computerSelection);

    if (result === 'Player') {
        result += ' wins!';
        winnerScores[0]++;
    } else if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
    } else {
        result += '. It\'s a tie!'
    }

    score.innerHTML = 'Player wins: [ <strong>' + winnerScores[0] + '</strong> ] Computer wins: [ <strong>' + winnerScores[1] + '</strong> ]';

    messenger('Player: <strong>' + playerSelection + '<br></strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    } else if (player === 'Rock' && computer === 'Scissors') {
        return 'Player';
    } else if (player === 'Paper' && computer === 'Rock') {
        return 'Player';
    } else if (player === 'Scissors' && computer === 'Paper') {
        return 'Player';
    } else {
        return 'Computer'
    }
}