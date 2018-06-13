import checkResult from "./checkTasks.js";
import vocabulary from "./vocabulary.js";

const Sortable = require('sortablejs');

const _ = require("lodash");




export default function task_5() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Connect the English word with the translation into Russian";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const givenWords = document.createElement("ul");
  givenWords.classList.add("task-field__given-words-list");
  let words = _.keys(vocabulary);
  let translations = [];

  for (let i = 0; i < 5; i++) {
    const givenWord = document.createElement("li");
    givenWord.textContent = _.sample(words);
    translations.push(_.sample(vocabulary[givenWord.textContent]));
    givenWords.appendChild(givenWord);
    _.pull(words, givenWord.textContent);
  }

  let shuffledTranslations = _.shuffle(translations);
  while (shuffledTranslations.toString() == translations.toString()) {
    shuffledTranslations = _.shuffle(shuffledTranslations);
  }

  const sortableWords = document.createElement("ul");
  sortableWords.classList.add("task-field__sortable-words-list");
  for (let i = 0; i < translations.length; i++) {
    const sortableWord = document.createElement("li");
    sortableWord.textContent = shuffledTranslations[i];
    sortableWords.appendChild(sortableWord);
  }

  const wrapper = document.createElement("div");
  wrapper.classList.add("task-field__wrapper");
  wrapper.appendChild(givenWords);
  wrapper.appendChild(sortableWords);

  const sortable = Sortable.create(sortableWords);

  form.appendChild(wrapper);


  const button = document.createElement("button");
  button.classList.add("task-field__button");
  button.type = "submit";
  button.textContent = "CHECK";
  form.appendChild(button);
  taskField.appendChild(form);

  document.querySelector(".game-field").appendChild(taskField);


  function getCorrectAnswersCounter() {
    let counter = 0;
    let givenWords = document.querySelectorAll(".task-field__given-words-list li");
    let sortableWords = document.querySelectorAll(".task-field__sortable-words-list li");
    for (let i = 0; i < sortableWords.length; i++) {
      if (vocabulary[givenWords[i].textContent].indexOf(sortableWords[i].textContent) != -1) {
        counter++;
      }
    }
    return counter;
  }


  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let result = false;

    if (getCorrectAnswersCounter() == 5) {
      result = true;
    }
    checkResult(result);
    button.disabled = "disabled";
  });
}
