import { eventCheck, eventClear } from "./events.js";
import { renderMainForm, renderModalWindowCalc } from "./render-form.js";

function addEvent(id, eventName) {
  document.getElementById(id).addEventListener("click", eventName);
}

function render(root) {
  root.innerHTML = "";
  renderMainForm(root);

  addEvent("btn-clear", eventClear);

  addEvent("btn-check", eventCheck);
}

function main() {
  const appDiv = document.querySelector("#app");

  if (appDiv !== null) {
    render(appDiv);
    renderModalWindowCalc(appDiv);
  } else {
    console.log("appDiv not found");
  }
}

export { main };
