import checkResult from "./checkTasks.js";


const Sortable = require('sortablejs');

const _ = require("lodash");



const sentences = {
  "Я рисую глаза и рот": "I am drawing the eyes and the mouth",
  "Я читаю слово": "I read a word",
  "Где тут супермаркет?": "Where is the supermarket?",
  "Скоро мы получим пенсию": "We will soon receive our pension",
  "Здесь кухня и ванная комната": "The kitchen and bathroom are here",
  "Где Ваша жена, господин Мюллер?": "Where is your wife, Mr. Miller?",
  "У меня есть киви и дыня": "I have a kiwi and a melon",
  "Как долго Вы летели?": "How long did you fly?",
  "Разрешите сесть рядом с Вами?": "May I sit with you?",
  "Что ты хочешь сегодня готовить?": "What do you want to cook today?",
  "Здесь есть лампа?": "Is there a lamp here?",
  "Вход платный?": "Does one have to pay an entrance fee?",
  "Я не остаюсь, потому что я ещё должен работать": "I am not staying because I still have to work",
  "Как долго Вы будете работать?": "How long will you work?",
  "Мы надеемся, что у него много денег": "We hope that he has a lot of money",
  "Можно взять на прокат снаряжение для дайвинга?": "Can one rent diving equipment?",
  "Когда уходит последний трамвай?": "When is the last tram?",
  "Или Вы хотели бы чай?": "Or do you prefer a tea?",
  "Мы пошли не туда": "We’re on the wrong road",
  "Завтра я снова работаю": "Tomorrow I will work again",
  "И ещё соль и перец, пожалуйста": "Some salt and pepper also, please",
  "Мы надеемся, что он женится на нашей дочери": "We hope that he marries our daughter",
  "Сколько багажа я могу взять с собой?": "How much luggage can I take?",
  "Я хотел бы апельсинового сока": "I’d like an orange juice",
  "Она должна постирать": "She must wash the clothes",
  "Я хотел бы забронировать рейс до Афин": "I’d like to book a flight to Athens",
  "Им можно было долго не ложиться спать": "They were allowed to stay up late",
  "Дело в том, что я собираюсь купить фотоплёнку": "I actually plan to buy a roll of film",
  "Ему нельзя было есть конфеты": "He was not allowed to eat sweets",
  "Я хотел бы положить деньги на мой счёт": "I want to deposit money in my account",
  "Но у неё уже есть друг": "But she already has a boyfriend",
  "У тебя есть планы на эти выходные?": "Do you already have plans for this weekend?",
  "Я его не пью, потому что я ещё должен ехать": "I’m not drinking it because I have to drive",
  "Я хотел бы бокал красного вина": "I’d like a glass of red wine",
  "Нет, у нас есть только одно свободное место": "No, we have only one seat available"
}


export default function task_6() {

  const taskField = document.createElement("section");
  taskField.classList.add("task-field");

  const task = document.createElement("p");
  task.classList.add("task-field__task");
  task.textContent = "Translate into English and make a sentence from the given words:";
  taskField.appendChild(task);

  const form = document.createElement("form");

  const label = document.createElement("label");
  label.classList.add("task-field__label");
  const sentence = _.sample(_.keys(sentences));
  label.textContent = sentence;
  form.appendChild(label);


  let shuffledSentence = _.shuffle(sentences[sentence].split(" "));
  while (shuffledSentence.join(" ") == sentences[sentence]) {
    shuffledSentence = _.shuffle(shuffledSentence);
  }

  const sortableSentence = document.createElement("ul");
  sortableSentence.classList.add("task-field__sortable-sentence");
  shuffledSentence.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    sortableSentence.appendChild(li);
  });


  const sortable = Sortable.create(sortableSentence);

  form.appendChild(sortableSentence);


  const button = document.createElement("button");
  button.classList.add("task-field__button");
  button.type = "submit";
  button.textContent = "CHECK";
  form.appendChild(button);
  taskField.appendChild(form);

  document.querySelector(".game-field").appendChild(taskField);


  function getResultSentence() {
    let result = "";
    let words = document.querySelectorAll(".task-field__sortable-sentence li");
    words.forEach( i => { result += `${i.textContent} `; });
    return result.slice(0, -1);
  }


  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let result = false;

    if (getResultSentence() == sentences[sentence]) {
      result = true;
    }
    checkResult(result);
    button.disabled = "disabled";
  });
}
