const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-quiz');

// Initialize the timer variables
var seconds = 60;
var timerInterval;

// Function to start the countdown
function startCountdown() {
  // Disable the start button to prevent multiple clicks
  startButton.disabled = true;

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
startButton.addEventListener('click', startCountdown);






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
      li.classList.add('answer');
  
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
