'use strict'

//sets variables to zero
let currentQuestion = 0
let score = 0

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
  $('#startButton').on('click', function () {
    fader('.quiz-body', 'fade-out', function () {
      $('.quizContainer').remove()
      renderQA()
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

function renderQA() {
  //This function will render the first question, then subsequent questions
  console.log('`renderQA` ran')
  if (currentQuestion < STORE.questions.length) {
  $('#wineApp').append(qaComponent(currentQuestion, score, STORE))}
  submitAnswer()
  }

function submitAnswer() {
  //This function submits a selected answer and checks it against
  //the correct answer. It then runs answer functions accordingly.
  console.log('`submitAnswer` ran')
  $('.questionContainer').on('submit', function (event) {
    event.preventDefault()
    let selected = $('input:checked')
    let answer = selected.val()
    let rightAns = STORE.questions[currentQuestion].correctAnswer
    if (answer === rightAns) {
      rightAnswer()
    } else {
      wrongAnswer()
    }
  })
}

function rightAnswer() {
  //This function will show feedback if the user selects the
  //correct answer
  console.log('`rightAnswer` ran')
  $('#wineApp').empty()
  $('#wineApp').append(correctComponent(STORE))
  currentQuestion++
  score++
  handleNext()
}

function wrongAnswer() {
  //This function will show feedback if the users selects the
  //wrong answer
  console.log('`wrongAnswer` ran')
    $('#wineApp').empty()
  $('#wineApp').append(wrongComponent(STORE))
  currentQuestion++
  handleNext()
}

function handleNext() {
  //This function will load the next Q or results page, depending on where you are in the quiz
  console.log('`handleNext` ran')
  $('#nextButton').on('click', function (event) {
    event.preventDefault()
    $('.feedbackContainer').remove()
    if (currentQuestion < STORE.questions.length) {
    renderQA()}
    else {
      finalScore()
      restartQuiz()
    }
  })
}

function finalScore() {
  //This function will deplay user's final score and give
  //feedback based on how many answers they got correct
  console.log('`finalScore` ran')
  $('#wineApp').empty()
  $('#wineApp').append(finalComponent(score))
}

function resetStats() {
  score = 0
  currentQuestion = 0
}

function restartQuiz() {
  //This function will take user back to main page
  //so they can restart the quiz
  console.log('`restartQuiz` ran')
  $('#restartButton').on('click', function(event) {
    event.preventDefault()
    $('.endContainer').remove()
    resetStats()
    loadApp()
  })
}

function makeQuiz() {
  loadApp()
  startWineQuiz()
  restartQuiz()
}

$(makeQuiz)
