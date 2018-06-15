import checkResult from "./checkTasks.js";

const _ = require('lodash');





const firstOperand = _.range(20);
const secondOperand = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const thirdOperand = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


export default function task_1() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Enter the correct answer:";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const label = document.createElement("label");
  label.classList.add("task-field__label");
  label.textContent = `${_.sample(firstOperand)} ${_.sample(["+", "-"])} ${_.sample(secondOperand)} * ${_.sample(thirdOperand)}`;
  form.appendChild(label);

  const input = document.createElement("input");
  input.classList.add("task-field__input");
  input.type = "text";
  input.required = true;
  form.appendChild(input);

  const button = document.createElement("button");
  button.classList.add("task-field__button");
  button.type = "submit";
  button.textContent = "CHECK";
  form.appendChild(button);
  taskField.appendChild(form);

  document.querySelector(".game-field").appendChild(taskField);
  input.focus();


  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let result = false;
    if (input.value == eval(label.textContent)) {
      result = true;
    }
    checkResult(result);
    button.disabled = "disabled";
  });
}
