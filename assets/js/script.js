

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-quiz');
const startContainerEl = document.getElementById('start-container');
var submitButton = document.getElementById("submit-btn");

// Initialize the timer variables
var seconds = 60;
var timerInterval;



startButton.addEventListener('click', startCountdown);


// Function to start the countdown
function startCountdown() {
  // Disable the start button to prevent multiple clicks
  startButton.disabled = true;
  startButton.style.display = 'none;'
  

  // Start the timer interval
  timerInterval = setInterval(updateTimer, 1000);
  

}



// Function to update the timer display
function updateTimer() {
  // Increment the seconds
  seconds--;


  // Calculate the hours, minutes, and remaining seconds
  const remainingSeconds = seconds % 60;

  // Format the time values with leading zeros
  const formattedTime = `${padZero(remainingSeconds)}`;

  // Update the timer display
  timerElement.textContent = "Seconds Remaining: " + formattedTime;
}

// Function to add leading zeros to single-digit numbers
function padZero(number) {
  return number.toString().padStart(2, '0');
}

// Add event listener to the start button






const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0 // Index of the correct option
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: 0 // Index of the correct option
    },
    // Add more question objects as needed
  ];


  function displayQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('answers');
  
    const question = questions[index];
    questionElement.textContent = question.question;
  
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
  
  
  displayQuestion(0); // Display the first question
  

viewHighScores.addEventListener("click", showHighScores);

submitButton.addEventListener("click", function (event) {
  event.preventDefault()
  var initials = document.querySelector("#initials").ariaValueMax;
  showHighScores(initials);
});







// function activateButton() {
//   // Disable the button
//   document.getElementById("start-container").disabled = true;

//   // Hide the button
//   document.getElementById("start-container").style.display = "";
// }
