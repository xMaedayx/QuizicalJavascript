var Time = document.querySelector("#Time")
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
var name = document.querySelector("#name")

var shuffledQuestions, currentQuestionsIndex
var totalTime = 60;

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
    timer();

}


function timer() {
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
}


function displayQuestions() {
    questionBox.classList.remove('hide')
    questionEl.innerText = shuffledQuestions[currentQuestionsIndex].question;
    
    const choices = shuffledQuestions[currentQuestionsIndex].choices;
    for (let i = 0; i < choices.length; i++) {
      const button = document.getElementById(`op${i + 1}`);
      button.innerText = choices[i];
    }
  }
    button1.addEventListener("click", function() {
        if (button1.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
         
        } else {
          displayEl.innerText = "Incorrect!";
          totalTime -= 10
        }
      });
      button2.addEventListener("click", function() {
        if (button2.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
         
        } else {
          displayEl.innerText = "Incorrect!";
          totalTime -= 10
        }
      });
        button3.addEventListener("click", function() {
          if (button3.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
            displayEl.innerText = "Correct!";
            setNextQuestion();
            
            
          } else {
            displayEl.innerText = "Incorrect!";
            totalTime -= 10
          }
        });
        button4.addEventListener("click", function() {
          if (button4.innerText === shuffledQuestions[currentQuestionsIndex].correctAnswer) {
            displayEl.innerText = "Correct!";
            setNextQuestion();
            
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
            const inputBox = document.getElementById('InputInitials');
            inputBox.style.display = 'block';
        }
        
      startButton.addEventListener("click", startgame);
      buttons.addEventListener("click", displayQuestions)
    