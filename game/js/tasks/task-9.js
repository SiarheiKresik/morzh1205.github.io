import checkResult from "./checkTasks.js";


const _ = require("lodash");


const words = {
  "beach": ["apartment", "flat", "house", "beach"],
  "briefcase": ["desk", "chair", "table", "briefcase"],
  "diary": ["computer", "screen", "mouse", "diary"],
  "sneeze": ["sprint", "walk", "run", "sneeze"],
  "type": ["consider", "think", "reflect", "type"],
  "hose": ["ears", "mouth", "eyes", "hose"],
  "pit": ["goat", "rabbit", "cow", "pit"],
  "humans": ["production", "marketing", "sales", "humans"],
  "frog": ["run", "swim", "jump", "frog"],
  "red": ["dog", "cat", "tiger", "red"],
  "Lion": ["sing", "dance", "fly", "Lion"],
  "Spring": ["Tuesday", "Saturday", "Thursday", "Spring"],
  "picnic": ["ocean", "sea", "river", "picnic"],
  "house": ["country", "town", "city", "house"],
  "tired": ["lucky", "happy", "nice", "tired"],
  "read": ["talk", "tell", "speak", "read"],
  "Thursday": ["science", "English", "math", "Thursday"],
  "school": ["present", "party", "invitation", "school"],
  "trip": ["cheek", "eye", "nose", "trip"],
  "group": ["sister", "partner", "student", "group"],
  "pen": ["ask", "do", "get", "pen"]
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
  let shuffeledWordsArray = _.shuffle(wordsArray);


  const wordsList = document.createElement("ul");
  wordsList.classList.add("task-field__wordsList");
  shuffeledWordsArray.forEach( i => {
    const li = document.createElement("li");
    li.textContent = i;
    wordsList.appendChild(li);
  });
  taskField.appendChild(wordsList);

  document.querySelector(".game-field").appendChild(taskField);

  wordsList.addEventListener("click", function handler(evt) {
    if (evt.target != this) {
      let result = false;
      if (evt.target.textContent == differentWord) {
        result = true;
      }
      checkResult(result);
      wordsList.removeEventListener("click", handler);
    }
  });
}
