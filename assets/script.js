var Time = document.querySelector("#Time")
var startButton = document.querySelector("#start-button")
var buttons = document.querySelector("#multipleChoice")
var area = document.querySelector(".area-div");
var questionEl = document.querySelector("#question")
var quizBox = document.querySelector(".area")
var displayEl = document.querySelector("#display")
var shuffledQuestions, currentQuestionsIndex




function startgame() {
    startButton.classList.add('hide')
    quizBox.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() -0.5)
    currentQuestionsIndex = 0
    displayQuestions()
}

function timer() {
  var totalTime = 60;
  var timeInterval = setInterval(function() {
      if (totalTime >= 1) {
       Time.textContent = totalTime + 'seconds'; 
       totalTime --;
      }
      else { 
          Time.textContent = 'NEXT'; 
          clearInterval(timeInterval);
          
      }
  }, 1000);
}




function displayQuestions() { 
    buttons.addEventListener("click", function() {
        if (buttons.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          Time.innerText = totalTime.innerText - 10;
        }
      });
      
      buttons.addEventListener("click", function() {
        if (buttons.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          Time.innerText = totalTime.innerText - 10;
        }
      });
      
      buttons.addEventListener("click", function() {
        if (buttons.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          Time.innerText = totalTime.innerText - 10;
        }
      });
      
      buttons.addEventListener("click", function() {
        if (buttons.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          Time.innerText = totalTime.innerText - 10;
        }
      });
      }

      function setNextQuestion() { 
    currentQuestionsIndex++;
    if (currentQuestionsIndex === shuffledQuestions.length) {
   // set as the end where there is a prompt for initials. displayEl.innerText =
  } else {
    displayQuestions();
      }
    }