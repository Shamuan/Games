const btnRoll = document.getElementById('roll');

let yourResult;
let opponentResult;

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

const diceNum1 = document.getElementById('dice-1');
const diceNum2 = document.getElementById('dice-2');
const diceNum3 = document.getElementById('dice-3');
const diceNum4 = document.getElementById('dice-4');
const diceNum5 = document.getElementById('dice-5');
const diceOpponent1 = document.getElementById('dice-opponent-1');
const diceOpponent2 = document.getElementById('dice-opponent-2');
const diceOpponent3 = document.getElementById('dice-opponent-3');
const diceOpponent4 = document.getElementById('dice-opponent-4');
const diceOpponent5 = document.getElementById('dice-opponent-5');
const yourScore = document.getElementById('your-score')
const opponentScore = document.getElementById('opponent-score')

function rollYourDice() {
    let result = Math.floor((Math.random() * 6) + 1);
    yourResult += result
    return borderDice(result)
}
function rollOpponentDice() {
    let result = Math.floor((Math.random() * 6) + 1);
    opponentResult += result
    return borderDice(result)
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

function showYourDices() {
    diceNum1.innerHTML = `${rollYourDice()}`;
    diceNum2.innerHTML = `${rollYourDice()}`;
    diceNum3.innerHTML = `${rollYourDice()}`;
    diceNum4.innerHTML = `${rollYourDice()}`;
    diceNum5.innerHTML = `${rollYourDice()}`;
};
function showOpponentDices(){
    diceOpponent1.innerHTML = `${rollOpponentDice()}`;
    diceOpponent2.innerHTML = `${rollOpponentDice()}`;
    diceOpponent3.innerHTML = `${rollOpponentDice()}`;
    diceOpponent4.innerHTML = `${rollOpponentDice()}`;
    diceOpponent5.innerHTML = `${rollOpponentDice()}`;
};
function whoWin() {
    if (yourResult > opponentResult) {
        alert('You Win!') 
    } else if (yourResult < opponentResult) {
        alert('You Lose :(')
    } else {
        alert("Realy? it's draw")
    }
}
btnRoll.onclick = () => {
    yourResult = 0;
    opponentResult = 0;
    showYourDices();
    showOpponentDices();
    yourScore.innerHTML = `Your score: ${yourResult}`;
    opponentScore.innerHTML = `Opponent's score: ${opponentResult}`;
    window.setTimeout(whoWin, 200)
}
// diceNum1.onclick = () => {
//     diceNum1.style = `
//     outline: 2px solid black; 
//     border-radius: 12px
//     `
// }
// diceNum2.onclick = () => {
//     diceNum2.style = `
//     outline: 2px solid black; 
//     border-radius: 12px
//     `
// }
// diceNum3.onclick = () => {
//     diceNum3.style = `
//     outline: 2px solid black; 
//     border-radius: 12px
//     `
// }
// diceNum4.onclick = () => {
//     diceNum4.style = `
//     outline: 2px solid black; 
//     border-radius: 12px
//     `
// }
// diceNum5.onclick = () => {
//     diceNum5.style = `
//     outline: 2px solid black; 
//     border-radius: 12px
//     `
// }