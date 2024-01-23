var timerElement = document.getElementById('timer');
var startButton = document.getElementById('start-quiz');
var startContainerEl = document.getElementById('start-quiz');
var submitButton = document.getElementById("submit-btn");
var gameContainer = document.getElementById("container");
var restartButton = document.getElementById("restart-btn");
var clearStorageButton = document.getElementById("clear-btn");
var showHighScoresButton = document.getElementById("highscores-btn");
var highScores = document.getElementById("highscores");
var nextButton = document.getElementById("next-btn");

// Initialize the timer variables
var timeLeft = 60;
var timerInterval;
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
    timeLeft--;
    //Update the timer display
    timerElement.textContent = timeLeft
    saveScore();
  }
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
    }
  
    // Move to the next question
    displayQuestion(questionIndex + 1)
      if (shuffledQuestions.length> currentQuestionIndex + 1) {
        nextButton.style.display = "block";
      }
  }
  







  function viewHighScores() {
  var highScores = document.getElementById("highscores-btn");
  highScores.style.display = "block";
  gameContainer.style.display = "none";
  startContainerEl.style.display ="none";

}

showHighScoresButton.addEventListener("click", viewHighScores)
startButton.addEventListener("click", startGame);