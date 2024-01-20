var startButton = document.getElementById("start-btn");


// startButton.addEventListener("click", startGame);




function startGame() {
    timerId = setInterval(timer, 1000);
    startContainerEl.classList.add("hide");
    console.log("!")
    timer();
}

function timer() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <=0) {
            saveScore();
    }
}


// var timeEl = document.querySelector(".time");
// var start = document.querySelector("#start");
// var timerId

// start.addEventListener ('click', function() {
//     timerId = setInterval(function() {
//     }, 1000);
// });

// function setTime() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + " seconds left.";
    
//         if (secondsLeft ===0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }
//     }, 1000);
// }

// var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);


