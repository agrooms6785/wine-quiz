function mainComponent (buttonText) {
  return `<main class='quizContainer container'>
      <section class='quiz-body animate'>
        <h1 class='main-heading'>How much do you really know about wine?</h1>
        <section class='image-body'>
          <img class='bannerImg' src="https://i.imgur.com/wHo2o5F.jpg?1" alt="shelf with wine bottles">
        </section>
        <footer class='firstButton'><button type='button' name='start' class='button' id='startButton'>${buttonText}</button></footer>
      </section>
    </main>`
}

function qaComponent (currentQuestion, score, STORE) {
  return `<main class='qAcontainer container'>
            <section class='questionScoreBar'>
              <ul id='questionScoreList'>
                <li>Question ${currentQuestion+1} of 8</li>
                <li>Score: ${score}</li>
              </ul>
            </section>
            <br>
            <form class='questionContainer container'>
              <h2>${STORE.questions[currentQuestion].question}</h2>
                <fieldset name='answer options' class='answerOptions'>
                    <label for='answer-one'>
                        <input class='answer-radio' type='radio' name='answer' id='answer-one' value='${STORE.questions[currentQuestion].answers[0]}' required>
                        <span class='answer-text'>${STORE.questions[currentQuestion].answers[0]}</span><br>
                    </label>
                    <label for='answer-two'>
                        <input class='answer-radio' type='radio' name='answer' id='answer-two' value='${STORE.questions[currentQuestion].answers[1]}' required>
                        <span class='answer-text'>${STORE.questions[currentQuestion].answers[1]}</span><br>
                    </label>
                    <label for='answer-three'>
                        <input class='answer-radio' type='radio' name='answer' id='answer-three' value='${STORE.questions[currentQuestion].answers[2]}' required>
                        <span class='answer-text'>${STORE.questions[currentQuestion].answers[2]}</span><br>
                    </label>
                    <label for='answer-four'>
                        <input class='answer-radio' type='radio' name='answer' id='answer-four' value='${STORE.questions[currentQuestion].answers[3]}' required>
                        <span class='answer-text'>${STORE.questions[currentQuestion].answers[3]}</span><br>
                    </label>
                </fieldset>
                <button type='submit' class='button' id='submitButton'>Check Answer</button>
            </form>
          <main>`
}

function correctComponent(STORE) {
  return `<section class='feedbackContainer container'><h2>That's correct!</h2>
<img id='rightImg' src='https://i.imgur.com/3sOqSPp.jpg' alt='cheers with wine glasses'>
<button type='button' class='button' id='nextButton'>Next</button></section>`
}

function wrongComponent(STORE) {
  return `<section class='feedbackContainer container'><h2>Uh oh, wrong answer! The correct answer is actually: ${STORE.questions[currentQuestion].correctAnswer}</h2>
<img id='wrongImg' src='https://i.imgur.com/Ne4vN2G.jpg' alt='wine glass with splashing wine'>
<button type='button' class='button' id='nextButton'>Next</button></section>`
}

function finalComponent(score) {
  return `<section class='endContainer container'>
    <h1 class='endH1'>Thank you for taking this quiz about wine!</h1>
     <p>You got ${score} questions correct.</p><br>
     <img class='finalImg' src='https://i.imgur.com/FlbWQFN.jpg' alt='a pile of wine corks'>
      <button type='button' name='restart' class='button' id='restartButton'>Click here to start a new quiz</button>
  </section>`
}
