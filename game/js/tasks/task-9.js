import checkResult from "./checkTasks.js";


const _ = require("lodash");


const words = {
  "beach": ["apartment", "flat", "house"],
  "briefcase": ["desk", "chair", "table"],
  "diary": ["computer", "screen", "mouse"],
  "sneeze": ["sprint", "walk", "run"],
  "type": ["consider", "think", "reflect"],
  "hose": ["ears", "mouth", "eyes"],
  "pit": ["goat", "rabbit", "cow"],
  "humans": ["production", "marketing", "sales"],
  "frog": ["run", "swim", "jump"],
  "red": ["dog", "cat", "tiger"],
  "Lion ": ["sing", "dance", "fly"],
  "Spring": ["Tuesday", "Saturday", "Thursday"],
  "picnic": ["ocean", "sea", "river"],
  "house": ["country", "town", "city"],
  "tired": ["lucky", "happy", "nice"],
  "read": ["talk", "tell", "speak"],
  "Thursday": ["science", "English", "math"],
  "school": ["present", "party", "invitation"],
  "trip": ["cheek", "eye", "nose"],
  "group": ["sister", "partner", "student"],
  "pen": ["ask", "do", "get"]
}




export default function task_9() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Choose an extra word:";
  taskField.appendChild(task);


  const differentWord = _.sample(_.keys(words));
  let wordsArray = words[differentWord];
  wordsArray.push(differentWord);
  _.shuffle(wordsArray);


  const wordsList = document.createElement("ul");
  wordsList.classList.add("task-field__wordsList");
  wordsArray.forEach( i => {
    const li = document.createElement("li");
    li.textContent = i;
    wordsList.appendChild(li);
  });
  taskField.appendChild(wordsList);

  document.querySelector(".game-field").appendChild(taskField);

  wordsList.addEventListener("click", function(evt) {
    if (evt.target != this) {
      let result = false;
      if (evt.target.textContent == differentWord) {
        result = true;
      }
      checkResult(result);
    }
  });
}
