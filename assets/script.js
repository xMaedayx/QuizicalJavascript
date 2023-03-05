// buttons 
var startButton = document.querySelector("#start-button")
var buttons = document.querySelector(".multipleChoice")
var button1 = document.querySelector("#op1")
var button2 = document.querySelector("#op2")
var button3 = document.querySelector("#op3")
var button4 = document.querySelector("#op4")
var backButton = document.querySelector("#goBack")
var submitInit = document.querySelector("#submit-initials")
//time elements
var Time = document.querySelector("#time")
// welcome page
var startGuide = document.querySelector("#startPage")

// question box 
var questionEl = document.querySelector("#question")
var quizBox = document.querySelector("#container")
var questionBox = document.querySelector("#question-container")
// footer (right or wrong)
var displayEl = document.querySelector("#display")
// end of game view 
var initials = document.querySelector("#inputInitials")
var scoreTally = document.querySelector(".score")
var player = document.querySelector("#name")
var highEl = document.querySelector("#highscore")
var scoreSection = document.querySelector("#inputAnswer")
// global variables to call within various local variables
var playerInitials = "";
var shuffledQuestions, currentQuestionsIndex
var totalTime = 60;
var correctAnswer = 0; 
var highscores = []



startButton.addEventListener("click", startgame);
buttons.addEventListener("click", displayQuestions);
startGuide.style.display = "block";
scoreSection.style.display = "none";


startButton.addEventListener('click', () => {
  startGuide.style.display = 'none';
});

function startgame() {
    startButton.classList.add('hide');
    questionEl.style.display = "block";
    quizBox.style.display = "block";
    shuffledQuestions = questions.sort(() => Math.random() -0.5); // shuffles questions array using Fisher-Yates shuffle algorithm
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
    
    const choices = shuffledQuestions[currentQuestionsIndex].choices; // the questions randomized at the index.
    // for-loop for randomizing the button multiple choice answers. 
    for (let i = 0; i < choices.length; i++) {
      const button = document.getElementById(`op${i + 1}`);
      button.innerText = choices[i];
    }
  }
  let correctAnswers = []
  button1.addEventListener("click", function() {
       // At the randomized choices within the current questions index point, the correct answer is checked and stored into a new array for score keeping. 
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
          // this if-statement allows the program to tell if all the questions in the object array have been displayed. 
          if (currentQuestionsIndex < shuffledQuestions.length) {
                      displayQuestions(); }
          else {
            endQuiz();
          }
        }

        function endQuiz() { 
            playerInitials = document.querySelector("#name").value;
            const inputBox = document.getElementById('.score_section')
            inputBox.style.display = 'block';
            questionEl.style.display = "none";
            quizBox.style.display = "none";
            clearInterval(timeInterval);
            localStorage.setItem(playerInitials, correctAnswers.length);
            renderHighScores()
        }

        // function inputPrompt() { 
        //  player.classList.add('hide')
        //  }
        
         function storeScore() {
          let correctAnswersList = "";
          for (let i = 0; i < correctAnswers.length; i++) {
          correctAnswersList += `<li>${correctAnswers[i]}</li>`
          submitInit.addEventListener('click', () => {
            startGuide.style.display = 'none';
            scoreTally.textContent = `You got ${correctAnswers.length} out of ${shuffledQuestions.length} correct.`;
            });
          }
        }
          
    // display the correct answers
    let correctAnswersList = "";
    for (let i = 0; i < correctAnswers.length; i++) {
        correctAnswersList += `<li>${correctAnswers[i]}</li>`;
    }


          
function renderHighScores() {
  // Clear content
 highEl.innerHTML = "";
  show(highEl);
  highEl = JSON.parse(localStorage.getItem("#highscore"));
  for (let i = 0; i < highscore.length; i++) {
      let scoreItem = document.createElement("div");
      scoreItem.className += "row1";
      // console.log(scoreItem)
      scoreItem.setAttribute("style", "background-color:blue;");
      scoreItem.textContent = `${(i + 1)}. ${highscore[i].username} - ${highscore[i].userScore}`;
      scoresEl.appendChild(scoreItem);
  }
  storeScore();
}
