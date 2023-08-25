// Questions
const questions = [
  {
    id: "0",
    question: "What is the syntax for declaring a variable in C?",
    possibleAns: ["data_type variable_name;", "data_type 1variable_name;", "data_type $variable_name;"],
    correctAns: "data_type variable_name;"
  },
  {
    id: "1",
    question: "What is the symbol used for the modulus operator in C?",
    possibleAns: ["%", "/", "-"],
    correctAns: "%"
  },
  {
    id: "2",
    question: "What is the symbol used for the division operator in C?",
    possibleAns: ["%", "/", "-"],
    correctAns: "/"
  },
  {
    id: "3",
    question: "Which keyword is used to exit from a loop in C?",
    possibleAns: ["break", "exit", "stop"],
    correctAns: "break"
  },
  {
    id: "4",
    question: "Which header file is required to use the 'printf' function in C?",
    possibleAns: ["iostream", "stdio.h", "stdlib.h"],
    correctAns: "stdio.h"
  },
  {
    id: "5",
    question: "What is the maximum value that an 'int' data type can hold in C?",
    possibleAns: ["32767", "2147483647", "65535"],
    correctAns: "2147483647"
  },
  {
    id: "6",
    question: "Which operator is used to access the address of a variable in C?",
    possibleAns: ["&", "*", "#"],
    correctAns: "&"
  },
  {
    id: "7",
    question: "In C, which keyword is used to define an 'if' statement?",
    possibleAns: ["case", "then", "if"],
    correctAns: "if"
  },
  {
    id: "8",
    question: "What is the size of 'float' data type in C?",
    possibleAns: ["4 bytes", "8 bytes", "2 bytes"],
    correctAns: "4 bytes"
  },
  {
    id: "9",
    question: "Which function is used to read a character from the keyboard in C?",
    possibleAns: ["scanf()", "gets()", "getch()"],
    correctAns: "getch()"
  }
];

let index = 0
let correctQns = 0
let incorrectQns = 0
let cardTitle = document.getElementById('card-title')
let cardText = document.getElementById('card-text')
let options = document.getElementById('options')
window.onload = () => {
  displayQuestion(index)
  let correct = "";
  let submit = document.getElementById('submit');

  submit.addEventListener("click", () => {
    let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');

    if (option1.checked == true) correct = option1.value.toLowerCase()
    else if (option2.checked == true) correct = option2.value.toLowerCase()
    else if (option3.checked == true) correct = option3.value.toLowerCase()

    if (correct == questions[index].correctAns.toLocaleLowerCase()) {
      correctQns++
      document.getElementById('prev-qn-status').classList.add('text-success')
      document.getElementById('prev-qn-status').innerHTML = "correct";
    } else {
      incorrectQns++
      document.getElementById('prev-qn-status').classList.add('text-danger')
      document.getElementById('prev-qn-status').innerHTML = "incorrect";
    }
    index += 1
    if (index < questions.length) {
      options.innerHTML = "";
      displayQuestion(index)
    } else {
      document.getElementById('result').innerHTML = `
      <li class="list-group-item active" aria-current="true">Result</li>
      <li class="list-group-item">Total Number Of Questions     : ${questions.length}</li>
      <li class="list-group-item">Number Of Correct Questions   :  ${correctQns}</li>
      <li class="list-group-item">Number Of Incorrect Questions : ${incorrectQns}</li>
      `
      document.getElementById('test-over').innerHTML = "Test Over Please Restart"
      submit.disabled = true;
    }

  })
}


function displayQuestion(index) {
  cardTitle.innerHTML = `Question ${index + 1}`
  cardText.innerHTML = questions[index].question

  for (i = 0; i < questions[index].possibleAns.length; i++) {
    options.innerHTML += `
    <li class="list-group-item">
    <div class="form-check">
      <input class="form-check-input" value="${questions[index].possibleAns[i]}" type="radio" name="option${i + 1}" id="option${i + 1}">
      <label class="form-check-label" for="option${i + 1}" id="option${i + 1}-label">
      ${questions[index].possibleAns[i]}
      </label>
    </div>
  </li>
    `
  }
}