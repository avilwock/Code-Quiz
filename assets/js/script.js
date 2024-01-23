const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-quiz');
const startContainerEl = document.getElementById('start-container');
var submitButton = document.getElementById("submit-btn");
var gameContainer = document.getElementById("container");

// Initialize the timer variables
var seconds = 60;
var timerInterval;

// Function to start the countdown
function startCountdown() {
  startButton.disabled = true;
  startButton.style.display = "none";
  gameContainer.style.display = "block";
   // Start the timer interval
  timerInterval = setInterval(updateTimer, 1000);
  
  displayQuestion(0); // Display the first question
}

startButton.addEventListener("click", startCountdown);

// Function to update the timer display
function updateTimer() {
  // Increment the seconds
  seconds--;


  // Calculate the hours, minutes, and remaining seconds
  const remainingSeconds = seconds % 60;

  // Update the timer display
  timerElement.textContent = "Seconds Remaining: " + remainingSeconds;
}



const questions = [
    {
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function = myFunction()", "function:myFunction()", "function = ()"],
      answer: 0 // Index of the correct option
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: ["<//This is a comment", "'This is a comment", "<!--This is a comment -->", "/*This is a comment */"],
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
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('answers');
  
    const question = questions[index];
    questionElement.textContent = questions.question;
  
    // Clear previous options
    optionsElement.innerHTML = '';
  
    // Create new option elements
    question.options.forEach((option, optionIndex) => {
      const li = document.createElement('li');
      li.textContent = option;
      li.classList.add('answers');
  
      // Add an event listener to handle option selection
      li.addEventListener('click', () => {
        checkAnswer(index, optionIndex);
      });
  
      optionsElement.appendChild(li);
    });
  }


  function checkAnswer(questionIndex, selectedOptionIndex) {
    const question = questions[questionIndex];
  
    if (selectedOptionIndex === question.answer) {
      // The selected answer is correct
      console.log('Correct answer!');
    } else {
      // The selected answer is incorrect
      console.log('Incorrect answer!');
    }
  
    // Move to the next question
    displayQuestion(questionIndex + 1);
  }
  

 //
 // 
let currentQuestionIndex = 0;

var nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", function() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Handle end of questions
    console.log("End of questions");
  }
});

//Initial dispaly of the first question
displayQuestion ();








// viewHighScores.addEventListener("click", showHighScores);

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault()
//   var initials = document.querySelector("#initials").ariaValueMax;
//   showHighScores(initials);
// });
