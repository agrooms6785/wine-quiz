'use strict'

//sets variables to zero
// let currentQuestion = 0
// let score = 0

function loadApp() {
  //This function will create and load the main page for my
  //wine quiz in the DOM.
  console.log('`loadApp` ran')
  $('#wineApp').append(
    `<main class=container>
    <section>
      <h2>How much do you really know about wine?</h2>
      <p>
      <img src="https://i.imgur.com/wHo2o5F.jpg?1" alt="shelf with wine bottles"></p>
      <div>
        <button type="button" name="start" id="start-button">Click to start</button>
      </div>
    </section>
      </main>`
  )
}

function startWineQuiz() {
  //This function will start the quiz when user clicks
  //start button
  console.log('`startWineQuiz` ran')
}

function updateQuestion() {
  //This function updates the question number
  console.log('`updateQuestion` ran')
}

function updateScore() {
  //This function updates the score; It will increment the
  //score based on user response
  console.log('`updateScore` ran')
}

function renderQuestion() {
  //This function will render the first question
  console.log('`renderQuestion` ran')
}

function updateAnswers() {
  //This function will render the answer options for the
  //current question
  console.log('`updateAnswers` ran')
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

function nextQuestion() {
  //This function will render the next question
  console.log('`nextQuestion` ran')
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
  updateAnswers()
  nextQuestion()
  finalScore()
  restartQuiz()
}

$(makeQuiz)
