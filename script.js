'use strict'

//sets variables to zero
let currentQuestion = 0
let score = 0

function mainComponent (buttonText) {
  return `<main class='quizContainer container'>
      <section class='quiz-body animate'>
        <h1 class='main-heading'>How much do you really know about wine?</h1>
        <section class='image-body'>
          <img class='bannerImg' src="https://i.imgur.com/wHo2o5F.jpg?1" alt="shelf with wine bottles">
        </section>
        <footer><button type='button' name='start' class='button' id='startButton'>${buttonText}</button></footer>
      </section>
    </main>`
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
  $('#wineApp').append(`<main class='qAcontainer container'> <section class='questionScoreBar'>
<ul id='questionScoreList'>
<li>Question ${currentQuestion+1} of 8</li>
<li>Score: ${score}</li>
</ul>
</section><br>
<form class='questionContainer container'>
  <h2>${STORE.questions[currentQuestion].question}</h2>
    <fieldset name='answer options' class='answerOptions'>
        <label for='answer-one'>
            <input type='radio' name='answer' id='answer-one' value='${STORE.questions[currentQuestion].answers[0]}' required>
            <span>${STORE.questions[currentQuestion].answers[0]}</span><br>
        </label>
        <label for='answer-two'>
            <input type='radio' name='answer' id='answer-two' value='${STORE.questions[currentQuestion].answers[1]}' required>
            <span>${STORE.questions[currentQuestion].answers[1]}</span><br>
        </label>
        <label for='answer-three'>
            <input type='radio' name='answer' id='answer-three' value='${STORE.questions[currentQuestion].answers[2]}' required>
            <span>${STORE.questions[currentQuestion].answers[2]}</span><br>
        </label>
        <label for='answer-four'>
            <input type='radio' name='answer' id='answer-four' value='${STORE.questions[currentQuestion].answers[3]}' required>
            <span>${STORE.questions[currentQuestion].answers[3]}</span><br>
        </label>
    </fieldset>
    <button type='submit' class='button' id='submitButton'>Check Answer</button>
</form>
<main>`)}
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
  $('#wineApp').append(
  `<section class='feedbackContainer container'><h2>That's correct!</h2>
<img id='rightImg' src='https://i.imgur.com/3sOqSPp.jpg' alt='cheers with wine glasses'>
<button type='button' class='button' id='nextButton'>Next</button></section>`)
  currentQuestion++
  score++
  handleNext()
}

function wrongAnswer() {
  //This function will show feedback if the users selects the
  //wrong answer
  console.log('`wrongAnswer` ran')
    $('#wineApp').empty()
  $('#wineApp').append(
  `<section class='feedbackContainer container'><h2>Uh oh, wrong answer! The correct answer is actually: ${STORE.questions[currentQuestion].correctAnswer}</h2>
<img id='wrongImg' src='https://i.imgur.com/Ne4vN2G.jpg' alt='wine glass with splashing wine'>
<button type='button' class='button' id='nextButton'>Next</button></section>`)
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
  $('#wineApp').append(
  `<section class='endContainer container'>
    <h1 class='endH1'>Thank you for taking this quiz about wine!</h1>
     <p>You got ${score} questions correct.</p><br>
     <img class='finalImg' src='https://i.imgur.com/FlbWQFN.jpg' alt='a pile of wine corks'>
      <button type='button' name='restart' class='button' id='restartButton'>Click here to start a new quiz</button>
  </section>`)
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
  resetStats()
  restartQuiz()
}

$(makeQuiz)
