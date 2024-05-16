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
  `<h3>Tudom elég elfoglalt személy vagy meg nincs mobilneted stb. De megkérdezhetem kerek perec hogy miért tart néha napokba válaszolni? (Nem akarlak itt számon kérni csak mivel alig ismerlek és a hétköznapokban máshogy nem beszélünk így nem tudom mennyire megszokott ez nálad.)</h3>
  <hr>
  <div class="question-option">
      <p>Ezer dolgom van nem tudok minden nap random embereknek irogatni.</p>
  </div>
    <div class="question-option">
      <p>Aaah bocsi mindig elfelejtem hogy te létezel.</p>
  </div>
    <div class="question-option">
      <p>Nem vagyok rád valami kíváncsi úgyhogy most ghostollak csak nem esik le neked.</p>
  </div>
  <div class="question-option">
      <p>Igazság szerint magam sem tudom de majd ha kedvem szottyan vissza írok.</p>
  </div>`,

  //Third question
  `<h3>Hogy sikerült az info érettségi?</h3>
  <hr>
    <textarea name="secondQ" id="secondQ" cols="30" rows="10"></textarea>`,

  //Fourth question
  `<h3>Melyiket várod jobban?</h3>
  <hr>
  <div class="question-option">
        <img src="Images/debuttv.jpg" alt="">
        <p>Debut TV 🎸</p>
    </div>
    <div class="question-option">
        <img src="Images/reptv.jpg" alt="">
        <p>Reputation TV 🐍</p>
    </div>`,

  //Fifth question
  `<h3>Na figyu megvannak még a snackek amiket a Margit-szigetre vittem.
  <br>Nekem ez túl sok és kéne valaki aki segítene elpuszítani őket.
  <br>Ha véletlen Herceghalmon járok valamelyik nap, akkor lenne kedved besegíteni?</h3>
  <hr>
  <div class="question-option">
        <p>Bocsi, nincs valami sok kedvem találkozni.</p>
    </div>
    <div class="question-option">
        <p>Persze, csak szólj róla előre hogy fel legyek készülve.</p>
    </div>
    <div class="question-option">
        <p>Hát ez az ajánlat nem nagyon vonz, de valami más programhoz szívesen csatlakozom.</p>
    </div>`,
];

let questionIndex = 1;
let result = {};

nextButton.addEventListener("click", () => {
  nextButton.disabled = true;
  questionIndex++;

  //Ghosted
  if (
    result[2] ==
    "Nem vagyok rád valami kíváncsi úgyhogy most ghostollak csak nem esik le neked."
  ) {
    qIndexDisplay.style.opacity = 0;
    resultsContainer.style.display = "block";
    title.style.display = "none";
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    ghosted();
    console.log("ghosted");
  }

  if (questionIndex == 6) {
    qIndexDisplay.style.opacity = 0;
    resultsContainer.style.display = "block";
    title.style.display = "none";
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    showResults();
  } else qIndexDisplay.innerHTML = questionIndex + "/6";

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

  if (questionIndex == 3) {
    const textField = questionContainer.querySelector("textarea");
    nextButton.disabled = false;

    textField.addEventListener("change", function () {
      answer = this.value;
      result[questionIndex] = answer;
    });
  }

  questionOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      nextButton.disabled = false;

      questionOptions.forEach(function (opt) {
        //Add class selected-option
        opt.classList.remove("selected-option");
      });
      option.classList.add("selected-option");

      answer = option.querySelector("p").textContent;
      result[questionIndex] = answer;
    });
  });
}

initializeOptions();

function showResults() {
  const resultsContainer = document.getElementById("results-container");

  for (let i = 1; i < 6; i++) {
    const answer = document.createElement("p");
    if (result[i] == undefined)
      answer.innerHTML = "Hékás ide nem írtál semmit :D";
    else answer.innerHTML = i + ". " + result[i];
    resultsContainer.appendChild(answer);

    const line = document.createElement("hr");
    resultsContainer.appendChild(line);
  }
}

function ghosted() {
  const ghostedContainer = document.getElementById("ghosted-container");
  ghostedContainer.style.display = "flex";
}
