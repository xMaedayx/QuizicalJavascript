var Time = document.querySelector("#Time")
var startButton = document.querySelector("#start-button")
var button1 = document.querySelector("#id1")
var button2 = document.querySelector("#id2")
var button3 = document.querySelector("#id3")
var button4 = document.querySelector("#id4")
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

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(q) { 
    
}

function displayQuestions() { 
    button1.addEventListener("click", function() {
        if (button1.innerText === shuffledQuestions[currentQuestionIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          //Time.innerText = Time.innerText - 10;
        }
      });
      
      button2.addEventListener("click", function() {
        if (button2.innerText === shuffledQuestions[currentQuestionIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          //Time.innerText = Time.innerText - 10;
        }
      });
      
      button3.addEventListener("click", function() {
        if (button3.innerText === shuffledQuestions[currentQuestionIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          //Time.innerText = Time.innerText - 10;
        }
      });
      
      button4.addEventListener("click", function() {
        if (button4.innerText === shuffledQuestions[currentQuestionIndex].correctAnswer) {
          displayEl.innerText = "Correct!";
          setNextQuestion();
        } else {
          displayEl.innerText = "Incorrect!";
          //Time.innerText = Time.innerText - 10;
        }
      });
      }

      function setNextQuestion() { 
    currentQuestionIndex++;
    if (currentQuestionIndex === shuffledQuestions.length) {
   // set as the end where there is a prompt for initials. displayEl.innerText =
  } else {
    displayQuestions();
      }

/* function rightAnswer(
let answerTrue = questions[index].correctAnswer

}

/* startButton.addEventListener("click", startgame);
button1.addEventListener("click", displayQuestions);
button2.addEventListener("click", displayQuestions);
button3.addEventListener("click", displayQuestions);
button4.addEventListener("click", displayQuestions);






// event listener on each button clicked grab text of button 
//check to see if its a right answer
// timer 
// increment value of currentquestion index 
//









/* if (choices.correct) {
    button1.dataset.correct = choices.correctAnswer
  }
  button1.addEventListener('click', choices.correctAnswer)
  button1.appendChild(button1)

  if (choices.correct) {
    button2.dataset.correct = choices.correctAnswer
  }
  button2.addEventListener('click', choices.correctAnswer)
  button2.appendChild(button2)


if (choices.correct) {
    button3.dataset.correct = choices.correctAnswer
  }
  button3.addEventListener('click', choices.correctAnswer)
  button3.appendChild(button3)
    
    
if (choices.correct) {
    button3.dataset.correct = choices.correctAnswer
  }
  button3.addEventListener('click', choices.correctAnswer)
  button3.appendChild(button3)

if (choices.correct) {
    button4.dataset.correct = choices.correctAnswer
  }
  button4.addEventListener('click', choices.correctAnswer)
  button4.appendChild(button4)












/* var winCounter = 0;
var lossCounter = 0; 




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


function displayQuestion (questionObj) {
    console.log(questionObj)
    questionEl.textContent = questionObj.question
    for (i=0; i <= questionObj.choices.length; i++) {
        var choiceEl = document.createElement("button")
        choiceEl.textContent = questionObj.choices[i]
        choiceEl.setAttribute("value", questionObj.choices[i])
        multipleChoice.appendChild(choiceEl)

    }

   
    
}

function RightAnswer (userInput) {
    let answerTrue = questions[index].correctAnswer
    displayEl.getElementsByClassName.visibility = "visible"
    
    
}


startButton.addEventListener("click", function() {
    displayQuestion(questions[i]) 
    timer()

} )

function enterInitials() { 
   UserInputInitials.appendChild() 

}

function highscores() { 
    if (correctAnswer === true){
        winCounter++ 
        localStorage.setItem("winCount", winCounter);
     }
     if (correctAnswer === false) {
        lossCounter++
        localStorage.setItem("winCount", winCounter)
     } 
} 





 button1.addEventListener("click", function() {
    return rightAnswer(correctAnswer, currentQuestion);
  });
  button2.addEventListener("click", function() {
    return rightAnswer(correctAnswer, currentQuestion);
  });
  button3.addEventListener("click", function() {
    return rightAnswer(correctAnswer, currentQuestion);
  });
  button4.addEventListener("click", function() {
    return rightAnswer(correctAnswer, currentQuestion);
  });










 //logs window object
console.log(window)

//logs reference to the document in the window object 
console.log(window.document)

//logs root element 
 console.log(document.documentElement)

 // Returns head element of current document
 console.log(document.head)

 
 questionEl.innerText = shuffledQuestions[currentQuestionsIndex].question
button1.innerText = shuffledQuestions[currentQuestionsIndex].choices[0]
button2.innerText = shuffledQuestions[currentQuestionsIndex].choices[1]
button3.innerText = shuffledQuestions[currentQuestionsIndex].choices[2]
button4.innerText = shuffledQuestions[currentQuestionsIndex].choices[3]

 
 
 */ 