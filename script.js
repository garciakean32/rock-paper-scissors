const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');

function clickRock() {
    let result = '';
    let random = math.round(Math.random() * 2)

    if (random === 0) (
        result = rock
    )
    else if (random === 1) (
        result = paper
    )

    else if (random === 2) (
        result = scissors
    )
}

function clickPaper() {
    let result = '';
    let random = math.round(Math.random() * 2)
    
    if (random === 0) (
        result = rock
    )
    else if (random === 1) (
        result = paper
    )

    else if (random === 2) (
        result = scissors
    )
}
function clickScissors() {
    let result = '';
    let random = math.round(Math.random() * 2)
    
    if (random === 0) (
        result = rock
    )
    else if (random === 1) (
        result = paper
    )

    else if (random === 2) (
        result = scissors
    )
}