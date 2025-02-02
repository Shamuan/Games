const btnRoll = document.getElementById('roll');
let roundCount = 0;
const yourScore = document.getElementById('your-score');
const opponentScore = document.getElementById('opponent-score');
const roundNumber = document.getElementById('round-num');
const newGame = document.getElementById('new-game');
let playerResult = [];
let opponentResult = [];


const dice = {
    dice1: `
        <div class="dice first-face">
        <span class="dot">
        </span>
        </div>
        `,
    dice2: `
        <div class="dice second-face">
        <span class="dot">
        </span>
        <span class="dot">
        </span>
        </div>
        `,
    dice3: `
        <div class="dice third-face">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        </div>
        `,
    dice4: `
        <div class="fourth-face dice">
        <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <div class="column">
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        </div>
        `,
    dice5: `
        <div class="fifth-face dice">
            <div class="column">
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div class="column">
                <span class="dot"></span>
            </div>
            <div class="column">
                <span class="dot"></span>
                <span class="dot"></span>
        </div>
        `,
    dice6: `
        <div class="sixth-face dice">
            <div class="column">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div class="column">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        </div>
        `,
}

const diceHtml = [
    diceNum1 = document.getElementById('dice-1'),
    diceNum2 = document.getElementById('dice-2'),
    diceNum3 = document.getElementById('dice-3'),
    diceNum4 = document.getElementById('dice-4'),
    diceNum5 = document.getElementById('dice-5'),
]
const diceOpHtml = [
    diceOpponent1 = document.getElementById('dice-opponent-1'),
    diceOpponent2 = document.getElementById('dice-opponent-2'),
    diceOpponent3 = document.getElementById('dice-opponent-3'),
    diceOpponent4 = document.getElementById('dice-opponent-4'),
    diceOpponent5 = document.getElementById('dice-opponent-5'),
]



let opponent = [
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
    { value: 0 },
]
let player = [
    { value: 0, selected: false },
    { value: 0, selected: false },
    { value: 0, selected: false },
    { value: 0, selected: false },
    { value: 0, selected: false },
]

function rollMyDice() {
    for (let i = 0; i < 5; i++) {
        if (player[i].selected === false) 
        player[i].value = calculateRoll();
    }
    displayDice()
}

function rollOpponentDice() {
    for (let i = 0; i < 5; i++) {
        opponent[i].value = calculateRoll();
    }
    displayDice()
}

function calculateRoll() {
    let result = Math.floor((Math.random() * 6) + 1);
    return result
}

function borderDice(result) {
    if (result === 1) {
        return dice.dice1
    } else if (result === 2) {
        return dice.dice2
    } else if (result === 3) {
        return dice.dice3
    } else if (result === 4) {
        return dice.dice4
    } else if (result === 5) {
        return dice.dice5
    } else {
        return dice.dice6
    }
};

function displayDice() {
    for (let i = 0; i < 5; i++) {
        diceHtml[i].innerHTML = borderDice(player[i].value)
        diceOpHtml[i].innerHTML = borderDice(opponent[i].value)
    }
}
function calculateResultsPlayer() {
    playerResult.splice(0, playerResult.length);
    for (let i = 0; i < player.length; i++) {
        playerResult.push(player[i].value)
    }
    return playerResult
}
function calculateResultsOpponent() {
    opponentResult = 0;
    for (i = 0; i < 5; i++) {
        opponentResult += opponent[i].value
    }
}

function sortArray(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}

function straight() {
    playerResult.sort(sortArray)
    if (playerResult == [1, 2, 3, 4, 5]) {
        console.log('10')
    } else (playerResult == [2, 3, 4, 5, 6]) 
        console.log('11')
}

newGame.onclick = () => {
    roundCount = 0;
    newGame.style = `display: none`;
    alert('Starting new game');
    yourScore.innerHTML = `Your score: 0`;
    opponentScore.innerHTML = `Opponent's score: 0`;
    roundNumber.innerHTML = `Roll dice`
    for (i = 0; i < 5; i++) {
        if (player[i].selected = true) {
            diceHtml[i].click()
        }
    diceHtml[i].innerHTML = ''
    }
}

function playinRound() {
    rollMyDice();
    rollOpponentDice();
    calculateResultsPlayer ();
    calculateResultsOpponent ();
    yourScore.innerHTML = `Your score: ${playerResult}`;
    opponentScore.innerHTML = `Opponent's score: ${opponentResult}`;
    roundNumber.innerHTML = `Round №${roundCount}: Choose dice to keep`
}

btnRoll.onclick = () => {
    if (roundCount < 3) {
        roundCount += 1
        playinRound()
    } else {
        window.setTimeout(whoWin, 200)
        newGame.style = `
        display: inline-block
        `
        roundNumber.innerHTML = `Game over!`
    }
}

function whoWin() {
    if (playerResult > opponentResult) {
        alert('You Win!')
    } else if (playerResult < opponentResult) {
        alert('You Lose :(')
    } else {
        alert("Realy? it's draw")
    }
}

for (let i = 0; i < 5; i++) {
    diceHtml[i].onclick = () => {
        if (player[i].selected === false) {
            player[i].selected = true;
            diceHtml[i].style = `
            outline: 6px solid black; 
            border-radius: 12px
            `
        } else {
            player[i].selected = false;
            diceHtml[i].style = `
                outline: none; 
                `
        }
    }
}