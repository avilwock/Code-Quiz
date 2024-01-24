// calls the timer Element
var timerElement = document.getElementById('timer');
//calls the section that holds the quiz
var startButton = document.getElementById('start-quiz');
//calls the submit button
var submitButton = document.getElementById("submit-btn");
//calls the game container
var gameContainer = document.getElementById("container");
//calls the restart button
var restartButton = document.getElementById("restart-btn");
//calls the clear button
var clearStorageButton = document.getElementById("clear-btn");
//calls the highscores button
var showHighScoresButton = document.getElementById("highscores-btn");
//calls the highscores section
var highScores = document.getElementById("highscores");
// calls the high scores table
var highScoresTable = document.getElementById("highscore");
//calls for input of initials
var initialsText = document.getElementById("initials");
//calls for the generated score

var scoreContainer = document.getElementById("scorecontainer");
var scoreText = document.getElementById("yourscore");
//parses the scores for the game
var scores = JSON.parse(localStorage.getItem("scores")) || [];

//gives timer a 60 second countdown
var timeLeft = 20;
//creates variable timerInterval
var timerInterval;
//creates a variable to shuffle questions
var shuffledQuestions;
// Function to start the countdown
function startGame() {
  //disable the start button when it begins
  startButton.disabled = true;
  //hide the start button when the quiz begins
  startButton.style.display = "none";
  //show the game container when the quiz begins
  gameContainer.style.display = "block";
  // Start the timer interval and update it
  timerInterval = setInterval(updateTimer, 1000);
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  displayQuestion(0); // Display the first question

}
startButton.addEventListener("click", startGame);


// Function to update the timer display
function updateTimer() {
  // Increment the seconds
  timeLeft--;
  // Calculate the hours, minutes, and remaining seconds
  var remainingSeconds = timeLeft % 60;

  // Update the timer display
  timerElement.textContent = "Seconds Remaining: " + remainingSeconds;

  if (timeLeft <= 0) {
    console.log("Game Over")
    timeLeft = "Game Over";
    //Update the timer display
    timerElement.textContent = timeLeft
    endGame();
    viewScore();
  }
  
}

function endGame() {
  gameContainer.remove();
  clearInterval(timerInterval);

  }

var questions = [
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "function = ()"],
    answer: 0 // Index of the correct option
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: ["//This is a comment", "'This is a comment", "<!--This is a comment -->", "/*This is a comment */"],
    answer: 0 // Index of the correct option
  },

  {
    question: "How do you declare a JavaScript variable?",
    options: ["var carName;", "variable carName", "v carName;", "New Variable: carName"],
    answer: 0 //Index of the correct option
  },

  {
    question: "What operator is used to assign a value to a variable?",
    options: ["=", "*", "X", "-"],
    answer: 0 //Index of the correct option
  }
];


function displayQuestion(index) {
  var questionElement = document.getElementById('question');
  var optionsElement = document.getElementById('answers');

  var question = questions[index];
  questionElement.textContent = question.question;

  // Clear previous options
  optionsElement.innerHTML = '';

  // Create new option elements
  question.options.forEach((option, optionIndex) => {
    var li = document.createElement('li');
    li.textContent = option;
    li.classList.add('options');
    li.classList.add('answers');

    // Add an event listener to handle option selection
    li.addEventListener('click', () => {
      checkAnswer(index, optionIndex);
    });

    optionsElement.appendChild(li);
  });
}

function checkAnswer(questionIndex, selectedOptionIndex) {
  var question = questions[questionIndex];

  if (selectedOptionIndex === question.answer) {
    // The selected answer is correct
    console.log('Correct answer!');
  } else {
    // The selected answer is incorrect
    console.log('Incorrect answer!');
    if (timeLeft <= 10) {
      timeLeft = 0;
    } else {
      timeLeft -= 10;
    }
  }
  currentQuestionIndex++
  // Move to the next question
    if (currentQuestionIndex < shuffledQuestions.length) {
    displayQuestion(questionIndex + 1)
    } else {
    endGame();
    viewScore();
   }
}





function viewHighScores() {
  var highScores = document.getElementById("highscores");
  console.log("🚀 ~ viewHighScores ~ highScores:", highScores)
  highScores.style.display = "block";
  gameContainer.style.display = "none";
  startButton.style.display = "none";
  restartButton.style.display = "block";
  clearStorageButton.style.display = "block";

}

showHighScoresButton.addEventListener("click", viewHighScores);


var clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  localStorage.clear();
})


function resetPage() {
  location.reload();
}
// Add an event listener to the reset button
restartButton.addEventListener("click", resetPage)


function viewScore () {
  var score = timeLeft;
  scoreContainer.style.display = "block";
  scoreText.textContent = "Your score was " + score;
  // localStorage.setItem("scores", JSON.stringify(score));
}

function scoreSubmit (event) {
  event.preventDefault()
  var initials = initialsText.value
  alert(initials)
}

submitButton.addEventListener("click", scoreSubmit)



var newScore = {
  score: timeLeft,
  initials: initials,
};

scores.push (newScore)

localStorage.setItem(newScore, initials)
highScoresTable = JSON.parse(localStorage.getItem("score"));