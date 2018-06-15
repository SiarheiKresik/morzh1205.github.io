import checkResult from "./checkTasks.js";


const _ = require('lodash');





export default function task_7() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Enter the missing number:";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const leftPart = `${_.random(5, 12)} + ${_.random(2, 12)} * `;
  const answer = _.random(2, 8);
  const rightPart = eval(leftPart + `${answer}`);

  const wrapper = document.createElement("div");
  wrapper.classList.add("task-field__equation");

  const leftPartItem = document.createElement("span");
  leftPartItem.textContent = leftPart;
  wrapper.appendChild(leftPartItem);

  const input = document.createElement("input");
  input.classList.add("task-field__numeric-input");
  input.required = true;
  input.maxLength = 2;
  input.pattern = "^[0-9]+$";
  wrapper.appendChild(input);

  const rightPartItem = document.createElement("span");
  rightPartItem.textContent = `= ${rightPart}`;
  wrapper.appendChild(rightPartItem);

  form.appendChild(wrapper);



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
    if (input.value == answer) {
      result = true;
    }
    checkResult(result);
    button.disabled = "disabled";
  });
}
