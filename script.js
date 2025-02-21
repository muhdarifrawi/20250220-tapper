document.addEventListener("DOMContentLoaded", () => {
    console.log("LOADED");
    handleTouch(event);
});
let player1zone = document.getElementById("player-1");
let player2zone = document.getElementById("player-2");
let player1score = 0;
let player2score = 0;
let keysPressed = {}; 
// function addTappers () {
//     let player1 = document.getElementById("player-1");
//     let player2 = document.getElementById("player-2");
//     // let player1btn = document.getElementById("player-1");
//     // let player2btn = document.getElementById("player-2");

//     player1.addEventListener("click", () => {
//         console.log("player 1!");
//         tallyScore(1);
//     });

//     player2.addEventListener("click", () => {
//         console.log("player 2!");
//         tallyScore(2);
//     });

// }



function handleTouch(event) {
    event.preventDefault();
    for (let touch of event.touches) {
        if (touch.clientX < window.innerWidth / 2) {
            tallyScore(1);
            player1zone.style.backgroundColor = "#3ba1c5"; // Flash effect
            setTimeout(() => player1zone.style.backgroundColor = "#2596be", 100);
        } else {
            tallyScore(2);
            player2zone.style.backgroundColor = "#c53b3b"; // Flash effect
            setTimeout(() => player2zone.style.backgroundColor = "#be2525", 100);
        }
    }
}



document.addEventListener("keydown", (event) => {
    if (keysPressed[event.key]) return; // Ignore if already held down
    keysPressed[event.key] = true;

    if (event.key === "a" || event.key === "A") {
        tallyScore(1);
        player1zone.style.backgroundColor = "#3ba1c5";
        setTimeout(() => player1zone.style.backgroundColor = "#2596be", 100);
    } else if (event.key === "l" || event.key === "L") {
        tallyScore(2);
        player2zone.style.backgroundColor = "#c53b3b";
        setTimeout(() => player2zone.style.backgroundColor = "#be2525", 100);
    }
});

document.addEventListener("keyup", (event) => {
    keysPressed[event.key] = false; // Reset key press
});

function tallyScore (player) {
    if (player == 1){
        player1score += 1;
        document.getElementById("player-1-score").innerText = player1score;
    }

    if (player == 2) {
        player2score += 1;
        document.getElementById("player-2-score").innerText = player2score;
    }
}