'use strict'

//sets variables to zero
let currentQuestion = 0
let score = 0

function mainComponent (buttonText) {
  return `<main class='quiz-container'>
      <section class='quiz-body animate'>
        <h1>How much do you really know about wine?</h1>
        <section class='image-body'>
          <img class='banner-image' src="https://i.imgur.com/wHo2o5F.jpg?1" alt="shelf with wine bottles">
        </section>
        <button type="button" name="start" id="start-button">${buttonText}</button>
      </section>
    </main>`
}

function questionComponent () {
return `<form class='question-container'>
  <h2>${STORE[currentQuestion].question}</h2>
    <fieldset name="answer options">
        <label for="answer-one">
            <input type="radio" name="answer" id="answer-one" value="${STORE[currentQuestion].answers[0]}" required>
            <span>${STORE[currentQuestion].answers[0]}</span>
        </label>
        <label for="answer-two">
            <input type="radio" name="answer" id="answer-two" value="${STORE[currentQuestion].answers[1]}" required>
            <span>${STORE[currentQuestion].answers[1]}</span>
        </label>
        <label for="answer-three">
            <input type="radio" name="answer" id="answer-three" value="${STORE[currentQuestion].answers[2]}" required>
            <span>${STORE[currentQuestion].answers[2]}</span>
        </label>
        <label for="answer-four">
            <input type="radio" name="answer" id="answer-four" value="${STORE[currentQuestion].answers[3]}" required>
            <span>${STORE[currentQuestion].answers[3]}</span>
        </label>
        <button type="submit" class="submitButton">SUBMIT</button>
    </fieldset>
</form>`);
}

function loadApp() {
  //This function will create and load the main page for my
  //wine quiz in the DOM.
  console.log('`loadApp` ran')
  $('#wineApp').append(mainComponent('Click to Start'))
}


function startWineQuiz() {
  //This function will start the quiz when user clicks
  //start button
  console.log('`startWineQuiz` ran')
  $('#start-button').on('click', function () {
    fader('.quiz-body', 'fade-out', function () {
      console.log('do stuff')
    })
  })
}

function fader (classNameOne, classNameTwo, cb) {
  $(classNameOne).addClass(classNameTwo)
  setTimeout(function () {
    $(classNameOne).remove()
      return cb()
  }, 800)
}

function renderQuestion() {
  //This function will render the first question, then subsequent questions
  console.log('`renderQuestion` ran')
  if (currentQuestion < STORE.length) {
    $('#wineApp').replaceWith(questionComponent)
  }
}

function renderAnswers() {
  //This function will render the answer options for the
  //current question
  console.log('`renderAnswers` ran')
}

function updateQuestion() {
  //This function updates the question number
  console.log('`updateQuestion` ran')
  currentQuestion++
}

function updateScore() {
  //This function updates the score; It will increment the
  //score based on user response
  console.log('`updateScore` ran')
  score++
}

function submitAnswer() {
  //This function submits a selected answer and checks it against
  //the correct answer. It then runs answer functions accordingly.
  console.log('`submitAnswer` ran')
}

function correctAnswer() {
  //This function will show feedback if the user selects the
  //correct answer
  console.log('`correctAnswer` ran')
}

function wrongAnswer() {
  //This function will show feedback if the users selects the
  //wrong answer
  console.log('`wrongAnswer` ran')
}

function finalScore() {
  //This function will deplay user's final score and give
  //feedback based on how many answers they got correct
  console.log('`finalScore` ran')
}

function restartQuiz() {
  //This function will take user back to main page
  //so they can restart the quiz
  console.log('`restartQuiz` ran')
}

function makeQuiz() {
  loadApp()
  startWineQuiz()
  renderQuestion()
  renderAnswers()
  finalScore()
  restartQuiz()
}

$(makeQuiz)
