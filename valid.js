const arrId = ["#first-side", "#second-side", "#third-side", "#low", "#upp"];

function invalidMessage() {
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.innerHTML = "Некорректный ввод";
  form.append(errorMessage);
}

function checkErrorMessage() {
  const errorMessage = document.querySelector(".error-message");
  if (errorMessage !== null) {
    document.querySelector(".error-message").remove("error-message");
  }
}

function isValid() {
  let condition = true;

  const regex = new RegExp("^[0-9]+$");

  for (let i of arrId) {
    if (isNaN(parseInt(document.querySelector(i).value))) {
      const input = document.querySelector(i);
      input.className = "no-valid";

      condition = false;
    }
    if (!regex.test(document.querySelector(i).value)) {
      const input = document.querySelector(i);
      input.className = "no-valid";

      condition = false;
    }
  }
  return condition;
}

export { isValid, checkErrorMessage, invalidMessage, arrId };
