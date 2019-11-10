'use strict'

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

// function questionComponent () {
// return `<section class='questionAndScoreBar'>
// <ul>
// <li>Question ${currentQuestion+1}/8</li>
// <li>Score: ${score}</li>
// </ul>
// </section>
// <form class='question-container'>
//   <h2>${STORE.questions[currentQuestion].question}</h2>
//     <fieldset name="answer options">
//         <label for="answer-one">
//             <input type="radio" name="answer" id="answer-one" value="${STORE.questions[currentQuestion].answers[0]}" required>
//             <span>${STORE.questions[currentQuestion].answers[0]}</span>
//         </label>
//         <label for="answer-two">
//             <input type="radio" name="answer" id="answer-two" value="${STORE.questions[currentQuestion].answers[1]}" required>
//             <span>${STORE.questions[currentQuestion].answers[1]}</span>
//         </label>
//         <label for="answer-three">
//             <input type="radio" name="answer" id="answer-three" value="${STORE.questions[currentQuestion].answers[2]}" required>
//             <span>${STORE.questions[currentQuestion].answers[2]}</span>
//         </label>
//         <label for="answer-four">
//             <input type="radio" name="answer" id="answer-four" value="${STORE.questions[currentQuestion].answers[3]}" required>
//             <span>${STORE.questions[currentQuestion].answers[3]}</span>
//         </label>
//         <button type="submit" class="submitButton">SUBMIT</button>
//     </fieldset>
// </form>`
// }
