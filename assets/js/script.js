// Global Variable
var secondsLeft= 60;
var i = 0;
// Query selectors
var startBTN = document.querySelector("#start-btn");
var highScoresBTN= document.querySelector("#highScores");
var backBTN = document.querySelector("#back-btn");
var clearBTN = document.querySelector("#clear-btn");
var timer = document.querySelector("#timeLeft");
var hideStart = document.getElementById("show");
var hiddenQ=document.getElementById("hiddenQ");
var topContainer= document.querySelector(".top-container");
var ulEl= document.getElementById("UL");
var playerInitialsArray = [];
var playerScoreArray= [];
var highScoresOB={
  playerInitialsArray:[],
    playerScoreArray: []
}

var questionEL= document.getElementById("question");
var answerAEL= document.getElementById("answerA");
var answerBEL= document.getElementById("answerB");
var answerCEL= document.getElementById("answerC");
var answerDEL= document.getElementById("answerD");
var correctAnswerEl= document.getElementById("correctAnswer");


startBTN.addEventListener("click", startQuiz);


// Questions Array
var questions = [
    {question: "Which of the following is not apart of the box content model?",
    A: "Padding",
    B: "Border",
    C: "Margin",
    D: "Class",
    correctAnswer: "Class"},
    {question: "Java Script is a _______ language?",
    A: "Object-Oriented",
    B: "Object-based",
    C: "Procedural",
    D: "none of the above",
    correctAnswer: "Object-Oriented"},
    {question: "Which of the following methods is usd to access HTML element using JavaScript",
    A: "getElementByID() ",
    B: "getElementsByClassName() ",
    C: "Both A and B",
    D: "None of the above ",
    correctAnswer: "Both A and B"},
    {question: "Which function is used to serialize an object into a JSON string in JavaScript?",
    A: "stringify()",
    B: "parse()",
    C: "convert()",
    D: "None of the above()",
    correctAnswer:"stringify()"},
    {question: "How to stop an interval timer in Javascript?",
    A: "clearInterval",
    B: "Stop",
    C: "clearTimer",
    D: "intervalOver",
    correctAnswer: "clearInterval"},
];

// Start quiz
function startQuiz(){
  
  i=0;
  // hide original text
  if(hideStart.style.display === 'none'){
    hideStart.style.display = "block";
    hiddenQ.style.display = "none";
  }else{
    hideStart.style.display = "none";
    hiddenQ.style.display = "block";
  };
  // start time
  setTime();
  displayQuestion();

}
  // display question
  function displayQuestion(){
// event listeners during display of question
  
  answerAEL.addEventListener("click", checkAnswer);
  answerBEL.addEventListener("click", checkAnswer);
  answerCEL.addEventListener("click", checkAnswer);
  answerDEL.addEventListener("click", checkAnswer);
    if(i<questions.length){
  questionEL.textContent= questions[i].question;
  answerAEL.textContent= questions[i].A;
  answerBEL.textContent= questions[i].B;
  answerCEL.textContent= questions[i].C;
  answerDEL.textContent= questions[i].D;
    }else{
      displayScore()
    }
  }  

// This function will prompt user of initials and store them on the High Scores pages where the data is stored in local storage. 
function displayScore(){
 
  var playerInitials = window.prompt("Enter your initials", "INI");

  highScoresOB = JSON.parse(localStorage.getItem("highScoreStorage"));

if(highScoresOB!== null){

  highScoresOB.playerInitialsArray.push(playerInitials);
  highScoresOB.playerScoreArray.push(secondsLeft);
  localStorage.setItem("highScoreStorage", JSON.stringify(highScoresOB))
  }
 console.log(highScoresOB)

 window.location.href =  "./highscores.html";

}


// set timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;

      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
      }
    }, 1000);

  }
// check selected answer with correct answer
function checkAnswer(){
  var userSelection = this.textContent; 
  if(userSelection===questions[i].correctAnswer){
    i++;   
    displayQuestion(); 
  }else {
    secondsLeft = secondsLeft - 10 ;
    i++;
    displayQuestion();
   } 
  
}









// function call
