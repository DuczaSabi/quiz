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
  `<h3>TTPD vélemények röviden?</h3>
  <hr>
    <textarea name="secondQ" id="secondQ" cols="30" rows="10"></textarea>`,

  //Third question
  `<h3>Ide nem kell kérdés.</h3>
  <hr>
  <div class="question-option">
        <p>Tükörtojás</p>
    </div>
      <div class="question-option">
        <p>Rántotta</p>
    </div>
      <div class="question-option">
        <p>Fúj tojás</p>
    </div>`,

  //Fourth question
  `<h3>Kedvenc film kategória</h3>
  <hr>
  <div class="question-option">
        <img src="Images/misc/akcio.webp" alt="">
        <p>Akció</p>
    </div>
      <div class="question-option">
        <img src="Images/misc/horror.webp" alt="">
        <p>Horror</p>
    </div>
      <div class="question-option">
        <img src="Images/misc/vigjatek.webp" alt="">
        <p>Vígjáték</p>
    </div>
      <div class="question-option">
        <img src="Images/misc/animacio.webp" alt="">
        <p>Animáció</p>
    </div>
    <div class="question-option">
        <img src="Images/misc/nemtom.webp" alt="">
        <p>Tudja fene nem nézek filmeket</p>
    </div>`,

  //Fifth question
  `<h3>Nem gond hogy beloptam a kvízes ötletedet?👉👈</h3>
  <hr>
  <div class="question-option">
        <p>De igen! Lehetnél kreatívabb te nokedli!😡</p>
    </div>
    <div class="question-option">
        <p>Semmi gond, habár nem annyira jó mint az enyém, de azért tetszik.</p>
    </div>`,

  //Sixth question
  `<h3>Ha egy krumpli lennél hogyan szeretnéd hogy megsüssenek?</h3>
  <hr>
  <div class="question-option">
        <p>Vajjal és friss fűszerekkel, hogy ízletesen piruljak.</p>
    </div>
      <div class="question-option">
        <p>Sültkrumpli módon, hogy ropogós héjam és puha belsőm legyen.</p>
    </div>
      <div class="question-option">
        <p>Fűszeres köntösben, hogy pikáns ízű legyek.</p>
    </div>
      <div class="question-option">
        <p>Alufóliában, hogy egyenletesen süssenek át.</p>
    </div>
    <div class="question-option">
        <p>Ember te jól vagy?</p>
    </div>`,

  //Seventh question
  `<h3>Hogy tetszett a 'Swiftie Nights' buli?</h3>
  <hr>
  <textarea name="seventhQ" id="seventhQ" cols="30" rows="10"></textarea>`,

  //Eighth question
  `<h3>Ha válszthatnál bármit, tanulnál másik nyelvet, vagy tetszik a francia?</h3>
  <hr>
    <div class="question-option">
        <img src="Images/misc/nyelvek.webp" alt="">
        <p>Választanék mást</p>
    </div>
    <div class="question-option">
        <img src="Images/misc/franc.webp" alt="">
        <p>Baguette 🥖</p>
    </div>`,

  //Ninth question
  `<h3>Mennyire vagy nagy swiftie?</h3>
  <hr>
    <textarea name="ninthQ" id="ninthQ" cols="30" rows="10"></textarea>`,

  //Tenth question
  `<h3>Melyik volt előbb, a tyúk vagy a tojás?</h3>
  <hr>
  <div class="question-option">
        <p>Tyúk</p>
    </div>
      <div class="question-option">
        <p>Tojás</p>
    </div>
      <div class="question-option">
        <p>Nyilván a kakas</p>
    </div>`,

  //Eleventh question
  `<h3>Voltál már / fogsz menni az Erar Tour-ra?</h3>
  <hr>
  <div class="question-option">
        <img src="Images/misc/sad.webp" alt="">
        <p>Nope</p>
    </div>
    <div class="question-option">
        <img src="Images/misc/happy.webp" alt="">
        <p>Yes whale!</p>
    </div>`,

  //Twelfth question
  `<h3>Tetszett a katkötő amit tőlem kaptál?</h3>
  <hr>
  <div class="question-option">
        <p>Igen</p>
    </div>
    <div class="question-option">
        <p>Persze</p>
    </div>
    <div class="question-option">
        <p>Nagyooon!</p>
    </div>`,

  //Bonus question
  `<h3>Najó, elmondhatod az őszinte véleményed itten.</h3>
  <hr>
  <textarea name="bonusQ" id="bonusQ" cols="30" rows="10"></textarea>`,
];

let questionIndex = 1;
let result = {};

nextButton.addEventListener("click", () => {
  nextButton.disabled = true;
  questionIndex++;
  if (questionIndex == 13) qIndexDisplay.style.opacity = 0;
  else if (questionIndex == 14) {
    resultsContainer.style.display = "block";
    title.style.display = "none";
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    showResults();
  } else qIndexDisplay.innerHTML = questionIndex + "/12";

  //Fade effect
  questionContainer.style.opacity = "0";
  nextButton.style.opacity = "0";
  setTimeout(() => {
    if (questionIndex <= questions.length + 1) {
      if (questionIndex === 7) {
        questionContainer.innerHTML = "<h3>Szingli vagy?</h3><hr>";
        questionContainer.style.opacity = "1";

        setTimeout(() => {
          questionContainer.innerHTML = questions[questionIndex - 2];
          questionContainer.style.opacity = "1";
          nextButton.style.opacity = "1";
          initializeOptions();
        }, 1500);
      } else {
        questionContainer.innerHTML = questions[questionIndex - 2];
        initializeOptions();
        setTimeout(() => {
          questionContainer.style.opacity = "1";
          nextButton.style.opacity = "1";
        }, 100);
      }
    }
  }, 200);
});

function initializeOptions() {
  const questionOptions = document.querySelectorAll(".question-option");
  let answer = "";

  if (
    questionIndex == 2 ||
    questionIndex == 7 ||
    questionIndex == 9 ||
    questionIndex == 13
  ) {
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

  for (let i = 1; i < 14; i++) {
    const answer = document.createElement("p");
    if (result[i] == undefined)
      answer.innerHTML = "Hékás ide nem írtál semmit :D";
    else answer.innerHTML = i + ". " + result[i];
    resultsContainer.appendChild(answer);

    const line = document.createElement("hr");
    resultsContainer.appendChild(line);
  }
}
