let player1zone = document.getElementById("player-1");
let player2zone = document.getElementById("player-2");
let player1outcomeText = document.getElementById("player-1-outcome-text");
let player2outcomeText = document.getElementById("player-2-outcome-text");
let timer = document.getElementById("timer");
let startBtn = document.getElementById("start-btn");
let player1score = 0;
let player2score = 0;
let keysPressed = {};
let intialTime = 30;
let timeLeft = intialTime;
let countDown = 5;
let timeSec = 0;
let gameActive = false;

document.addEventListener("DOMContentLoaded", () => {
    console.log("LOADED");

    startBtn.addEventListener("click", startGame);

    function handleWinner () {
        if(player1score > player2score){
            player1outcomeText.innerText = "Winner";
        }
        else if (player1score < player2score) {
            player2outcomeText.innerText = "Winner";
        }
        else if (player1score == player2score) {
            player1outcomeText.innerText = "Draw";
            player2outcomeText.innerText = "Draw";
        }
    }

    function endGame() {
        gameActive = false;
        handleVisuals();
        handleWinner();
        startBtn.innerText = "Play Again ?";
    }

    function startGame() {
        if(timeLeft == 0){
            timeLeft = intialTime;
            countDown = 5;
            handleTimeBar();
        }
        player1outcomeText.innerHTML = "";
        player2outcomeText.innerHTML = "";
        player1score = 0;
        player2score = 0;
        gameActive = true;
        document.getElementById("progress-group").classList.remove("d-none");
        startCountdown();
    }

    function startCountdown() {
        startBtn.innerText = countDown;
        let timerInterval = setInterval(() => {
            if (countDown > 0) {
                countDown--;
            } else {
                clearInterval(timerInterval);
                startTimer();
            }
            startBtn.innerText = countDown;
        }, 1000);
    }

    function startTimer() {
        handleVisuals();
        let timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                // timerDisplay.textContent = `Time: ${timeLeft}`;
                timeSec++;
                handleTimeBar();
            } else {
                clearInterval(timerInterval);
                endGame();
            }
            timer.innerText = timeLeft;
        }, 1000);
    }

    
    function handleTouch(event) {
        // event.preventDefault();
        // console.log(event.touches)
        for (let touch of event.touches || [event]) {
            if (window.innerWidth < 766) {
                if (touch.clientY < window.innerHeight / 2) {
                    tallyScore(1);
                    player1zone.style.backgroundColor = "#3ba1c5"; // Flash effect
                    setTimeout(() => player1zone.style.backgroundColor = "#2596be", 100);
                } else {
                    tallyScore(2);
                    player2zone.style.backgroundColor = "#c53b3b"; // Flash effect
                    setTimeout(() => player2zone.style.backgroundColor = "#be2525", 100);
                }
            }
            else {
                if (touch.clientX > window.innerWidth / 2) {
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
    }

    function handleVisuals () {
        if(gameActive) {
            document.getElementById("start-msg").classList.add("d-none");
            document.getElementById("player-1-text").classList.remove("d-none");
            document.getElementById("player-2-text").classList.remove("d-none");
            document.getElementById("player-1-score").innerText = 0;
            document.getElementById("player-2-score").innerText = 0;
            handleControls();
        }
        else if (!gameActive) {
            handleControls();
            document.getElementById("start-msg").classList.remove("d-none");
            document.getElementById("player-1-text").classList.add("d-none");
            document.getElementById("player-2-text").classList.add("d-none");
        }
    }

    function handleControls() {
        if(gameActive){
            document.addEventListener("touchstart", handleTouch, { passive: false });
            document.addEventListener("pointerdown", handleTouch, { passive: true });

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
        }
        else if (!gameActive) {
            document.removeEventListener("touchstart", handleTouch);
            document.removeEventListener("pointerdown", handleTouch);
            document.removeEventListener("keydown", () => {});
            document.removeEventListener("keyup", () => {});
        }
        
    }

    function tallyScore(player) {
        if (player == 1) {
            player1score += 1;
            document.getElementById("player-1-score").innerText = player1score;
        }

        if (player == 2) {
            player2score += 1;
            document.getElementById("player-2-score").innerText = player2score;
        }
    }

    function handleTimeBar() {
        // console.log(timeSec, intialTime);
        let barWidth = (timeLeft / intialTime) * 100;
        // console.log(barWidth.toString());
        document.getElementById("progress-time").style.width = barWidth.toString() + "%";
        // console.log(document.getElementById("progress-time").style.width);
    }

    // startTimer();
});


