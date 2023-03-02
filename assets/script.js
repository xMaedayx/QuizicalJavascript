var Time = document.querySelector("#time")
var startButton = document.querySelector("#start-button")
var buttons = document.querySelector(".multipleChoice")
var button1 = document.querySelector("#op1")
var button2 = document.querySelector("#op2")
var button3 = document.querySelector("#op3")
var button4 = document.querySelector("#op4")
var questionEl = document.querySelector("#question")
var quizBox = document.querySelector("#container")
var questionBox = document.querySelector("#question-container")
var displayEl = document.querySelector("#display")
var startGuide = document.querySelector("#startPage")
var initials = document.querySelector("#InputInitials")
var scoreTally = document.querySelector("#win-loss-counter")
var player = document.querySelector("#name")
var scores = document.querySelector(".score")
var scores = document.querySelector("#inputAnswer")
var highEl = document.querySelector("#highscore")
var playerInitials = "";

var shuffledQuestions, currentQuestionsIndex
var totalTime = 60;
var correctAnswer = 0; 
var highscores = []


startGuide.style.display = "block";
startButton.addEventListener('click', () => {
  startGuide.style.display = 'none';
});

function startgame() {
    startButton.classList.add('hide');
    questionEl.style.display = "block";
    quizBox.style.display = "block";
    shuffledQuestions = questions.sort(() => Math.random() -0.5);
    currentQuestionsIndex = 0;
    displayQuestions();
   

}


  let timeInterval = setInterval(function() {
      if (totalTime >= 1) {
       Time.textContent = totalTime + 'seconds'; 
       totalTime --;
      }
      else { 
          clearInterval(timeInterval);
          endQuiz()  
          
      }
  }, 1000);



function displayQuestions() {
    questionBox.classList.remove('hide')
    questionEl.innerText = shuffledQuestions[currentQuestionsIndex].question;
    
    const choices = shuffledQuestions[currentQuestionsIndex].choices;
    for (let i = 0; i < choices.length; i++) {
      const button = document.getElementById(`op${i + 1}`);
      button.innerText = choices[i];
    }
  }
  let correctAnswers = []
  button1.addEventListener("click", function() {
        if (button1.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
          correctAnswers.push(shuffledQuestions[currentQuestionsIndex].correctAnswer);

         
        } else {
          displayEl.innerText = "Incorrect!";
          totalTime -= 10
        }
      });
      button2.addEventListener("click", function() {
        if (button2.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
          correctAnswers.push(shuffledQuestions[currentQuestionsIndex].correctAnswer);
         
        } else {
          displayEl.innerText = "Incorrect!";
          totalTime -= 10
        }
      });
        button3.addEventListener("click", function() {
          if (button3.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
            displayEl.innerText = "Correct!";
            setNextQuestion();
            correctAnswers.push(shuffledQuestions[currentQuestionsIndex].correctAnswer);
            
            
          } else {
            displayEl.innerText = "Incorrect!";
            totalTime -= 10
          }
        });
        button4.addEventListener("click", function() {
          if (button4.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
            displayEl.innerText = "Correct!";
            setNextQuestion();
            correctAnswers.push(shuffledQuestions[currentQuestionsIndex].correctAnswer);
            
          } else {
            displayEl.innerText = "Incorrect!";
            totalTime -= 10
          }
       });
      
      
      
        function setNextQuestion()  { 
          currentQuestionsIndex++;
          console.log(currentQuestionsIndex)
          if (currentQuestionsIndex < shuffledQuestions.length) {
                      displayQuestions(); }
          else {
            endQuiz();
          }
        }

        function endQuiz() { 
            playerInitials = document.querySelector("#name").value;
            const inputBox = document.getElementById('InputInitials hide')
            inputBox.style.display = 'block';
            questionEl.style.display = "none";
            quizBox.style.display = "none";
            clearInterval(timeInterval);
            localStorage.setItem(player.value, correctAnswers.length);
        }

        function inputPrompt() { 
         player.classList.add('hide')
         

        }
        function storeScore() {
          player.addEventListener('click', () => {
            startGuide.style.display = 'none';
          });
          scoreTally.textContent = `You got ${correctAnswers.length} out of ${shuffledQuestions.length} correct.`;

    // display the correct answers
      let correctAnswersList = "";
    for (let i = 0; i < correctAnswers.length; i++) {
        correctAnswersList += `<li>${correctAnswers[i]}</li>`;
    }
    displayEl.innerHTML = `<p>The correct answers were:</p><ul>${correctAnswersList}</ul>`;
}

          
function renderHighScores() {
  // Clear content
 highEl.innerHTML = "";
  show(highEl);
  highEl = JSON.parse(localStorage.getItem("highscore"));
  for (let i = 0; i < highscore.length; i++) {
      let scoreItem = document.createElement("div");
      scoreItem.className += "row mb-3 p-2";
      console.log(scoreItem)
      scoreItem.setAttribute("style", "background-color:PaleTurquoise;");
      scoreItem.textContent = `${(i + 1)}. ${highscore[i].username} - ${highscore[i].userScore}`;
      scoresEl.appendChild(scoreItem);
  }
}



       

            
        
        
 
      startButton.addEventListener("click", startgame);
      buttons.addEventListener("click", displayQuestions)
    