let question_data = [
  {
    question:
      "What will be the output of the following code: console.log(typeof NaN);?",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correct_option: "'number'",
  },
  {
    question: "Which of the following is a feature of JavaScript ES6?",
    options: [
      "Arrow functions",
      "String interpolation",
      "Default parameters",
      "All of the above",
    ],
    correct_option: "All of the above",
  },
  {
    question:
      "What is the output of the following code: console.log(0.1 + 0.2 === 0.3);?",
    options: ["true", "false", "undefined", "TypeError"],
    correct_option: "false",
  },
  {
    question:
      "What will be the output of the following code: [1, 2, 3].map(num => num * num);?",
    options: ["[1, 2, 3]", "[1, 4, 9]", "[1, 2, 9]", "undefined"],
    correct_option: "[1, 4, 9]",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The global object",
      "The object that called the function",
      "The function itself",
      "None of the above",
    ],
    correct_option: "The object that called the function",
  },
];

const questions_container = document.getElementById("quiz_questions_container");
const result = document.getElementById("results");
let current_question_index = 0;
let score = 0;

let question_length = question_data.length;

localStorage.setItem("questions_length", question_length);

function renderQuestion() {
  if (current_question_index < question_data.length) {
    questions_container.innerHTML = "";

    // Render current question
    questions_container.innerHTML += `
      <h2>Question ${current_question_index + 1}: ${
      question_data[current_question_index].question
    }</h2>
      <hr>`;

    // Render options
    question_data[current_question_index].options.forEach((opt, ind) => {
      const optionId = `option${ind + 1}`;
      questions_container.innerHTML += `
        <label for="${optionId}">
          <input type="radio" id="${optionId}" name="options-${current_question_index}" value="${opt}">
          ${opt}
        </label>
        <br>`;
    });

    // Render Next or Submit button
    const btnText =
      current_question_index === question_data.length - 1 ? "Submit" : "Next";
    questions_container.innerHTML += `
      <div class="btn-container">
      <button class="btn btn-primary" id="nextBtn" disabled>
      ${btnText} 
      </button>
      </div>`;

    // Add event listener to radio inputs
    const radioBtns = document.querySelectorAll(
      `input[name="options-${current_question_index}"]`
    );
    radioBtns.forEach((radio) => {
      radio.addEventListener("change", () => {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.disabled = false;
      });
    });

    // Add event listener to Next or Submit button
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", handleButtonClick);
  } else {
    showResult();
  }
}

function handleButtonClick() {
  const checkedRadioBtn = document.querySelector(
    `input[name="options-${current_question_index}"]:checked`
  );
  if (checkedRadioBtn) {
    const selectedAnswer = checkedRadioBtn.value;
    const correctAnswer = question_data[current_question_index].correct_option;

    if (selectedAnswer === correctAnswer) {
      score++;
    }

    current_question_index++;
    renderQuestion(); // Render next question or show result if last question
  } else {
    alert("Please select an option before proceeding.");
  }
}

function showResult() {
  localStorage.setItem("result", score);
  window.location.href = `./Results.html`;
  // Redirect to result page
  // window.location.href = "/quiz_course_01_python/Python_Result.html";
}

renderQuestion();
