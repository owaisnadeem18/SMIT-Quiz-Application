// Python Quiz Questions --------

let question_data = [
  {
    question: "What is the output of print(2 ** 3)?",
    options: ["8", "6", "9", "12"],
    correct_option: "8",
  },
  {
    question: "What is the keyword used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    correct_option: "def",
  },
  {
    question: "Which of the following data types is immutable?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    correct_option: "Tuple",
  },
  {
    question: "What is the output of print(3 == 4)?",
    options: ["True", "False", "None", "Error"],
    correct_option: "False",
  },
  {
    question: "How do you start a comment in Python?",
    options: ["#", "//", "/*", "!--"],
    correct_option: "#",
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

  window.location.href = `./Python_Result.html`;

  // Redirect to result page
  // window.location.href = "/quiz_course_01_python/Python_Result.html";
}

renderQuestion();
