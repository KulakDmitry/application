import { createCalc } from "./calc.js";

const sides = [
  { name: "a", value: "first-side" },
  { name: "b", value: "second-side" },
  { name: "c", value: "third-side" },
  { name: "от", value: "low" },
  { name: "до", value: "upp" },
];

const btns = [
  {
    name: "Проверить",
    id: "btn-check",
  },
  {
    name: "Очистить",
    id: "btn-clear",
  },
];

function renderInputBlock(sides, form) {
  const inputBlock = document.createElement("div");
  const label = document.createElement("label");
  label.for = sides.name;
  label.innerHTML = sides.name;
  inputBlock.append(label);
  const input = document.createElement("input");
  input.type = "text";
  input.name = sides.value;
  input.id = sides.value;
  input.placeholder = "...";
  inputBlock.append(input);
  form.append(inputBlock);
}

function modalWindowCalcActive() {
  const modalCaclWindow = document.querySelector(".app-calc");
  modalCaclWindow.classList.toggle("invisible");

  const calcBtn = document.querySelector(".calculator-btn");
  calcBtn.classList.toggle("calc-btn-active");
}

function renderModalWindowCalc(root) {
  const modal = document.createElement("div");
  modal.append(createCalc());
  modal.classList.add("app-calc", "invisible");
  root.append(modal);
}

function renderMainForm(root) {
  const headerBlock = document.createElement("div");
  headerBlock.className = "header-block";

  const header = document.createElement("div");
  header.className = "header";

  const title = document.createElement("h1");
  title.className = "title";
  title.innerHTML = "Проверка треугольника";

  const calculatorButton = document.createElement("figure");
  calculatorButton.classList.add("calculator-btn");
  calculatorButton.addEventListener("click", modalWindowCalcActive);

  header.append(title);
  header.append(calculatorButton);
  headerBlock.prepend(header);

  const form = document.createElement("form");
  form.id = "form";
  form.className = "main-input-form";

  const inputForm = document.createElement("div");
  inputForm.className = "input-form";
  sides.forEach((item) => renderInputBlock(item, inputForm));
  form.append(inputForm);

  function createButtons(btns) {
    const button = document.createElement("input");
    button.type = "button";
    button.value = btns.name;
    button.id = btns.id;
    inputButtons.append(button);
  }

  const inputButtons = document.createElement("div");
  inputButtons.className = "input-buttons";
  form.append(inputButtons);

  btns.forEach((item) => createButtons(item));

  headerBlock.append(form);

  root.append(headerBlock);

  const answerList = document.createElement("div");
  answerList.id = "answer-list";

  root.append(answerList);
}

export { renderMainForm, renderModalWindowCalc };
