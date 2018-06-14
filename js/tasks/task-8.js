import checkResult from "./checkTasks.js";


const _ = require('lodash');





export default function task_8() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Enter  >, <  or  =";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const leftPart = `${_.random(5, 12)} ${_.sample(["+", "*"])} ${_.random(2, 12)} `;
  const rightPart = `${_.random(5, 12)} ${_.sample(["+", "*"])} ${_.random(2, 12)} `;

  const wrapper = document.createElement("div");
  wrapper.classList.add("task-field__equation");

  const leftPartItem = document.createElement("span");
  leftPartItem.textContent = leftPart;
  wrapper.appendChild(leftPartItem);

  const input = document.createElement("input");
  input.classList.add("task-field__numeric-input");
  input.required = true;
  input.maxLength = "1";
  input.pattern = "[<>=]";
  wrapper.appendChild(input);

  const rightPartItem = document.createElement("span");
  rightPartItem.textContent = rightPart;
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
    if (input.value == "=") {
      input.value = "==";
    }
    if (eval(`${leftPart} ${input.value} ${rightPart}`)) {
      result = true;
    }
    input.value = "";
    checkResult(result);
    button.disabled = "disabled";
  });
}
