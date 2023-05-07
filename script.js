const rock = document.querySelector('rock-btn');
const paper = document.querySelector('paper-btn');
const scissors = document.querySelector('scissors-btn');

let yourS = 0;
let drawS = 0;
let aiS = 0;


function clickRock() {
    let resultR = '';
    let resultP = '';
    let resultS = '';
    let random = Math.round(Math.random() * 2)

    if (random === 0) (
        resultR = rock
    )
    else if (random === 1) (
        resultP = paper
    )

    else if (random === 2) (
        resultS = scissors
    )

    guess = rock;

    if (guess === resultR) {
        alert(`You: Rock vs AI: Rock ==>> DRAW`)
        drawS = drawS + 1
        document.getElementById('drawScore').innerHTML = drawS;
    }

    else if (guess === resultP) {
        alert(`You: Rock vs AI: Paper ==>> YOU LOSE`)
        aiS = aiS + 1
        document.getElementById('aiScore').innerHTML = aiS;
    }

    else if (guess === resultS) {
        alert(`You: Rock vs AI: Scissors ==>> YOU WIN`)
        yourS = yourS + 1
        document.getElementById('yourScore').innerHTML = yourS;
    }

}

function clickPaper() {
    let resultR = '';
    let resultP = '';
    let resultS = '';
    let random = Math.round(Math.random() * 2)

    if (random === 0) (
        resultR = rock
    )
    else if (random === 1) (
        resultP = paper
    )

    else if (random === 2) (
        resultS = scissors
    )

    guess = paper;

    if (guess === resultR) {
        alert(`You: Paper vs AI: Rock ==>> YOU WIN`)
        yourS = yourS + 1
        document.getElementById('yourScore').innerHTML = yourS
    }

    else if (guess === resultP) {
        alert(`You: Paper vs AI: Paper ==>> DRAW`)
        drawS = drawS + 1
        document.getElementById('drawScore').innerHTML = drawS;
    }

    else if (guess === resultS) {
        alert(`You: Paper vs AI: Scissors ==>> YOU LOSE`)
        aiS = aiS + 1
        document.getElementById('aiScore').innerHTML = aiS;
    }
}
function clickScissors() {
    let resultR = '';
    let resultP = '';
    let resultS = '';
    let random = Math.round(Math.random() * 2)

    if (random === 0) (
        resultR = rock
    )
    else if (random === 1) (
        resultP = paper
    )

    else if (random === 2) (
        resultS = scissors
    )

    guess = scissors;

    if (guess === resultR) {
        alert(`You: Scissors vs AI: Rock ==>> YOU LOSE`)
        aiS = aiS + 1
        document.getElementById('aiScore').innerHTML = aiS;
    }

    else if (guess === resultP) {
        alert(`You: Scissors vs AI: Paper ==>> YOU WIN`)
        yourS = yourS + 1
        document.getElementById('yourScore').innerHTML = yourS;
    }

    else if (guess === resultS) {
        alert(`You: Scissors vs AI: Scissors ==>> DRAW`)
        drawS = drawS + 1
        document.getElementById('drawScore').innerHTML = drawS;
    }
}


