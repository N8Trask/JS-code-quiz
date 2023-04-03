var hideContentEl = document.getElementById('hideContent');
var startQuizBtn = document.querySelector('.startQuiz');
var containerEl = document.querySelector('.container');
var questionP = document.getElementById('questionP');
var choiceBtn1 = document.getElementById('btn1');
var choiceBtn2 = document.getElementById('btn2');
var choiceBtn3 = document.getElementById('btn3');
var choiceBtn4 = document.getElementById('btn4');
var answerEl = document.getElementById('answer');
var doneAlert = document.querySelector('.storeInfo');
var scoreStorage = document.getElementById('score');
var initials = document.getElementById('initials');
var submitInitials = document.getElementById('submitInitials');
var savedInfo = document.querySelector('.savedInfo');
var btnClearHighScores = document.getElementById('btnClearHighScores');
var btnGoBack = document.getElementById('btnGoBack');
var timerElement = document.getElementById('timerCount');
var savedInitalScore = document.getElementById('savedInitalScore');
var timeLeft = document.getElementById('timeLeft');
var highScores = document.querySelector('.savedInfo');
// var errorAlert = document.getElementById('errorAlert');

var time;
var countQuestion = 0;
var timerEl;
var timeInterval;
var getQuestion;
var nameScore;
var score;

startQuizBtn.addEventListener('click', startGame);
choiceBtn1.addEventListener('click', nextQuestion);
choiceBtn2.addEventListener('click', nextQuestion);
choiceBtn3.addEventListener('click', nextQuestion);
choiceBtn4.addEventListener('click', nextQuestion);

submitInitials.addEventListener('click', initialsInput);
btnGoBack.addEventListener('click', init);
btnClearHighScores.addEventListener('click', clearLocalStorage);


function init() {
  hideContentEl.style.display = 'block';
  containerEl.style.display = 'none';
  savedInfo.style.display = 'none';
  savedInitalScore.style.display = 'block';

  savedInitalScore.innerHTML = '';
}


function startGame() {
  countQuestion = 0;
  time = 75;
  timerElement.style.display = 'block';

  timeInterval = setInterval(timer, 1000);
  createQuestion();
  displayContent();
  hideHeader();
}


function timer() {
  time = time - 1;
  timerEl = timerElement.textContent = time;
  if (time <= 0) {
    clearInterval(timeInterval);
  }
}


function nextQuestion(event) {
  var getResponse = getQuestion.answer;
  var selectedChoice = event.target.textContent;

  if (selectedChoice == getResponse) {
    answerEl.innerHTML = 'Correct!'
  } else {
    answerEl.innerHTML = 'Wrong!'
    time = time - 10
  }

  countQuestion++

  if (countQuestion >= 5) {
    clearInterval(timeInterval)
    doneAlert.style.display = 'block'
    timerElement.style.display = 'none'
    timeLeft.style.display = 'none'
    answerEl.style.display = 'none'

    score = scoreStorage.textContent = time
  }
  createQuestion()
}


function createQuestion() {
  getQuestion = quizQuestions[countQuestion]
  questionP.textContent = getQuestion.question;

  choiceBtn1.textContent = getQuestion.choices[0]
  choiceBtn2.textContent = getQuestion.choices[1]
  choiceBtn3.textContent = getQuestion.choices[2]
  choiceBtn4.textContent = getQuestion.choices[3]
}

function displayContent() {
  if (containerEl.style.display == 'none') {
    containerEl.style.display = 'block'
  } else {
    containerEl.style.display = 'none'
  }
}

function hideHeader() {
  if (hideContentEl.style.display === 'block') {
    hideContentEl.style.display = 'none'
  } else {
    hideContentEl.style.display = 'block'
  }
}


function initialsInput(event) {
  event.preventDefault()
  var userInitials = initials.value;

  var storeResult = JSON.parse(localStorage.getItem('store'))
  var finalScore = `${userInitials} ${time}`
  if (!storeResult) {
    storeResult = [finalScore]
  } else {
    storeResult.push(finalScore)
  }

  var saveResult = JSON.stringify(storeResult)
  localStorage.setItem('store', saveResult)

  clearInterval(timeInterval)

  for (var i = 0; i < storeResult.length; i++) {
    savedInitalScore.innerHTML += `<li>${storeResult[i]}</li>`
  }
  highScores.style.display = 'block';
  doneAlert.style.display = 'none';
}


function clearLocalStorage() {
  var clear = localStorage.removeItem('store');
  if (!clear) {
    savedInitalScore.style.display = 'none';
  }
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
];
