const greetText = document.querySelector("#greet-text");
const nextButton = document.querySelector("#next-button");
const qIndexDisplay = document.querySelector("#question-index");
const resultsContainer = document.querySelector("#results-container");
const title = document.querySelector("h1");
const questionContainer = document.querySelector(".question-container");

window.onload = function () {
  setTimeout(() => {
    greetText.style.opacity = 0;
    greetText.style.top = "-100px";

    setTimeout(() => {
      nextButton.style.opacity = 1;
      title.style.opacity = 1;
      questionContainer.style.opacity = 1;
      qIndexDisplay.style.opacity = 1;
      greetText.style.display = "none";
    }, 800);
  }, 1000);
};
const questions = [
  //Second question
  `<h3>Az alábbi filmek közül melyeket láttad?</h3>
  <hr>
  <div class="question-option">
      <img src="Images/blended.png">
      <p>Kavarás</p>
  </div>
  <div class="question-option">
      <img src="Images/apadrautok.png">
      <p>Apádra ütök</p>
  </div>
  <div class="question-option">
      <img src="Images/megint17.jpg">
      <p>Megint 17</p>
  </div>
  <div class="question-option">
      <img src="Images/nekem8.png">
      <p>Nekem 8</p>
  </div>
  <div class="question-option">
      <img src="Images/noi szervek.jpg">
      <p>Női szervek</p>
  </div>`,

  //Third question
  `<h3>Melyik megy először?</h3>
  <hr>
  <div class="question-option">
        <img src="Images/tej.png" alt="">
        <p>Tej</p>
    </div>
    <div class="question-option">
        <img src="Images/muzli.png" alt="">
        <p>Müzli</p>
    </div>`,

  //Fourth question
  `<h3>Hawaii pizza?</h3>
  <hr>
  <div class="question-option">
        <p>Igeeeen</p>
    </div>
    <div class="question-option">
        <p>Ew</p>
    </div>`,

  //Fifth question
  `<h3>Milyen napod volt? (Csak röviden, majd kifejtheted hangüziben😘)</h3>
  <hr>
  <div class="question-option">
        <p></p>
    </div>
    <div class="question-option">
        <p></p>
    </div>
    <div class="question-option">
        <p></p>
    </div>`,
];

let questionIndex = 1;
let result = {};

nextButton.addEventListener("click", () => {
  nextButton.disabled = true;
  questionIndex++;

  if (questionIndex == 6) {
    qIndexDisplay.style.opacity = 0;
    resultsContainer.style.display = "block";
    title.style.display = "none";
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    showResults();
  } else qIndexDisplay.innerHTML = questionIndex + "/5";

  //Fade effect
  questionContainer.style.opacity = "0";
  nextButton.style.opacity = "0";
  setTimeout(() => {
    if (questionIndex <= questions.length + 1) {
      questionContainer.innerHTML = questions[questionIndex - 2];
      initializeOptions();
      setTimeout(() => {
        questionContainer.style.opacity = "1";
        nextButton.style.opacity = "1";
      }, 100);
    }
  }, 200);
  console.log(result);
});

function initializeOptions() {
  const questionOptions = document.querySelectorAll(".question-option");
  let answer = "";

  if (questionIndex == 2) {
    let selectedAnswers = [];

    questionOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        const optionText = option.querySelector("p").textContent;

        if (option.classList.contains("selected-option")) {
          option.classList.remove("selected-option");
          selectedAnswers = selectedAnswers.filter(
            (item) => item !== optionText
          );
        } else {
          option.classList.add("selected-option");
          selectedAnswers.push(optionText);
        }

        result[questionIndex] = selectedAnswers;

        // Enable the next button only if at least one option is selected
        nextButton.disabled = selectedAnswers.length === 0;
      });
    });
  } else if (questionIndex == 5) {
    const textField = document.createElement("textarea");
    textField.name = "fifthQ";
    textField.id = "fifthQ";
    textField.cols = 30;
    textField.rows = 10;

    questionContainer.appendChild(textField);
    nextButton.disabled = true;

    textField.addEventListener("input", function () {
      answer = this.value;
      result[questionIndex] = answer;
      nextButton.disabled = answer.trim() === "";
    });
  } else {
    questionOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        nextButton.disabled = false;

        questionOptions.forEach(function (opt) {
          opt.classList.remove("selected-option");
        });
        option.classList.add("selected-option");

        answer = option.querySelector("p").textContent;
        result[questionIndex] = answer;
      });
    });
  }
}

initializeOptions();

function showResults() {
  const resultsContainer = document.getElementById("results-container");

  for (let i = 1; i < 6; i++) {
    const answer = document.createElement("p");
    if (result[i] == undefined)
      if (i == 1) answer.innerHTML = "";
      else answer.innerHTML = "Hékás ide nem írtál semmit :D";
    else answer.innerHTML = result[i];
    resultsContainer.appendChild(answer);

    const line = document.createElement("hr");
    resultsContainer.appendChild(line);
  }
}
