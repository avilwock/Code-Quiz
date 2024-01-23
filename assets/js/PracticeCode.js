




/// Mess With under this. Above is okay


var nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", function() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Handle end of questions
    console.log("End of questions");
    endQuiz();
  }
});













  function setNextQuestion() {
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length)
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }





  

// if (currentQuestionIndex < questions.length) {
//   //if there are more question then display the next question.
//   showQuestion();
//   //otherwise if there are no more questions
// } else {
//   //then end the quiz
//   endQuiz();
//}

//Initial dispaly of the first question
displayQuestion ();





function viewHighScores () {

  document.getElementById("scorecontainer")
  highScores.style.display = "block";
  if (typeof initials == "string") {
    var score = {
      initials, timeLeft
    }
    finalScore.push(score)
  }
}


//restartButton
restartButton.addEventListener("click", function() {
  window.location.reload();
})
//clear storage button
clearStorageButton.addEventListener("click", function() {
  localStorage.clear();
  document.getElementById("high-scores").innerHTML = "";
})

//view high scores button
showHighScoresButton.addEventListener("click", viewHighScores);



//Log high scores
function saveScore() {
  clearInterval(timerInterval);
  timerElement.textContent = "Time: " + timeLeft;
  setTimeout(function() {
    questionsContainerEl.classList.add("hide");
    document.getElementById("scorecontainer").classList.remove("hide");
    document.getElementById("yourscore").textContent = "Your final score is :" + (timeLeft*2)

  }, 2000)
}

LoadScores = function()  {
  if (!saveScores) {
    return false;
  }

  savedScores = JSON.parse(savedScores);
  var initials = document.querySelector("#initials").value;
  var newScore = {
    score: timeLeft*2,
    initials: initials
  }
}