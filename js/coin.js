let coinGame = document.getElementById('flip-coin')
const flipBtn = document.getElementById('flip')

function flipCoin() {
    let result = Math.floor((Math.random() * 2));
    if (result === 0) {
        return `
            <div class="circle">
                <span>win</span>
            </div>
        `
    } else {
        return `
            <div class="circle">
                <span>lose</span>
            </div>
        `
    }
}

flipBtn.onclick = () => {
    coinGame.innerHTML = `${flipCoin()}`;
}