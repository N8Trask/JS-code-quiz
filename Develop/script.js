var hideContentEl = document.getElementById('hideContent');
var startQuizBtn = document.querySelector('.startQuiz');
var containerEl = document.querySelector('.container');
var questionP = document.getElementById('questionP');
var choiceBtn1 = document.getElementById('btn1');
var choiceBtn2 = document.getElementById('btn2');
var choiceBtn3 = document.getElementById('btn3');
var choiceBtn4 = document.getElementById('btn4');
var answerEl = document.getElementById('answer');
var doneMsg = document.querySelector('.storeInfo');
var scoreStorage = document.getElementById('score');
var initials = document.getElementById('initials');
var submitInitials = document.getElementById('submitInitials');
var savedInfo = document.querySelector('.savedInfo');
var btnClearHighScores = document.getElementById('btnClearHighScores');
var btnGoBack = document.getElementById('btnGoBack');
var timerElement = document.getElementById('timerCount');

var time;

startQuizBtn.addEventListener('click', startGame);
// choiceBtn1.addEventListener('click', "")
// choiceBtn2.addEventListener('click', "")
// choiceBtn3.addEventListener('click', "")
// choiceBtn4.addEventListener('click', "")

//function init()?



function startGame() {

}

function timer() {

}


var quizQuestions = [
    {
      question: "What can an array be used to store?",
      choices: [
        "1. Other arrays",
        "2. Numbers and strings",
        "3. Booleans",
        "4. All of the above",
      ],
      answer: "4. All of the above",
    }, 
  
    {
      question: "Which HTML element should Javascript be used in?",
      choices: [
        "1. <script>",
        "2. <head>",
        "3. <link>",
        "4. <html>"
      ],
      answer: "1. <script>",
    }, 
  
    {
      question: "What does the 'trim()' method do?",
      choices: [
        "1. Removes the last element of an array",
        "2. Converts a Javascript value to a JSON string",
        "3. Removes whitespace from both ends of a string",
        "4. None of the above"
      ],
      answer: "3. Removes whitespace from both ends of a string",
    },
  
    {
      question: "'if' statements are always enclosed with [square brackets]",
      choices: [
        "1. True",
        "2. False",
        "3. I don't know",
      ],
      answer: "2. False",
    },
  
    {
      question: "You can view local storage values through Google Chrome dev tools",
      choices: [
        "1. True",
        "2. False",
        "3. I don't know",
      ],
      answer: "1. True",
    },
  ]
  