import { isValid, checkErrorMessage, invalidMessage, arrId } from "./valid.js";
import { isTriangle } from "./render-answer.js";

function eventCheck() {
  const arr = arrId.map((item) => parseInt(document.querySelector(item).value));

  const errorMessage = document.querySelector(".error-message");

  if (isValid()) {
    checkErrorMessage();
    isTriangle(arr);
  } else {
    if (errorMessage === null) {
      invalidMessage();
    }
  }

  function inputClearEvent(id) {
    const input = document.querySelector(id);
    input.addEventListener("input", function () {
      input.className = "reset-form";
    });
  }

  arrId.forEach((item) => inputClearEvent(item));
}

function clearInput(id) {
  const input = document.querySelector(id);
  input.value = "";
  input.className = "reset-form";
}

function eventClear() {
  const removeDiv = document.querySelector("#answer-list");
  removeDiv.innerHTML = "";

  arrId.forEach((item) => clearInput(item));

  checkErrorMessage();
}

export { eventCheck, eventClear };
