window.onload = function () {
  let score = localStorage.getItem("result");
  let name = localStorage.getItem("User Data");
  let questions_length = localStorage.getItem("questions_length");
  let inner = document.getElementById("inner");

  name = JSON.parse(name);
  questions_length = JSON.parse(questions_length);

  let student_name = name.form_name;
  let total_questions = questions_length;
  let Percentage = (score * 100) / questions_length;
  Percentage_Ceil = Math.ceil(Percentage);

  let results = document.querySelector(".results-container");

  results.innerHTML = `
      <h2>${student_name} Scored : ${score} out of ${total_questions}</h2>
      <h2>
        Percentage : ${
          Percentage > 70
            ? `<span class="student_name">${Math.ceil(Percentage)}%</span>`
            : `<span class="student_name_red">${Math.ceil(Percentage)}%</span>`
        }
      </h2>
    `;

  if (Percentage > 70) {
    results.innerHTML += `
        <h2> Congratulations ! <span class="student_name">${student_name}</span>, You have passed the Quiz</h2>
      `;

    inner.innerText += `${Percentage_Ceil}`;

    var progressBar = new ProgressBar.Circle("#progress", {
      color: "#0d6db7",
      strokeWidth: 10,
      duration: 2000, // milliseconds
      easing: "easeInOut",
    });

    progressBar.animate(Percentage / 100); // percent
  } else {
    inner.style.color = "red";

    inner.innerText += `${Percentage_Ceil}`;

    var progressBar = new ProgressBar.Circle("#progress", {
      color: "red",
      strokeWidth: 10,
      duration: 2000, // milliseconds
      easing: "easeInOut",
    });

    results.innerHTML += `
        <h1 class="student_name">Better Luck Next Time !</h1>
        <h2> We regret to inform you, <span class="student_name_red">${student_name}</span>, that you did not pass the quiz. </h2>
      `;

    progressBar.animate(Percentage / 100); // percent
  }
};
