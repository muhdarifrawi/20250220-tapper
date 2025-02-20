document.addEventListener("DOMContentLoaded", () => {
    console.log("LOADED");
    addTappers();
});

let player1score = 0;
let player2score = 0;

function addTappers () {
    let player1 = document.getElementById("player-1");
    let player2 = document.getElementById("player-2");
    // let player1btn = document.getElementById("player-1");
    // let player2btn = document.getElementById("player-2");

    player1.addEventListener("click", () => {
        console.log("player 1!");
        tallyScore(1);
    });

    player2.addEventListener("click", () => {
        console.log("player 2!");
        tallyScore(2);
    });

    // player1btn.addEventListener("click", () => {
    //     console.log("player 1!");
    //     tallyScore(1);
    // });

    // player2btn.addEventListener("click", () => {
    //     console.log("player 2!");
    //     tallyScore(2);
    // });

}

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