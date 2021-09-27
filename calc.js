function createCalc() {
  const fragment = new DocumentFragment();

  const display = document.createElement("div");
  display.className = "display";
  display.innerHTML = "0";

  const form = document.createElement("form");
  form.className = "form";

  fragment.append(display);
  fragment.append(form);

  function createButton(buttonData, form) {
    const button = document.createElement("input");
    button.type = "button";
    button.value = buttonData.value;
    button.id = buttonData.id;
    button.className = "input-calc-btn";
    form.append(button);
    button.addEventListener("click", buttonData.handler);
  }

  const mainBtnHandler = (event) => {
    if (display.innerHTML === "0") {
      display.innerHTML = event.target.innerHTML;
    }
    if (event.target.innerHTML === "=") {
      display.innerHTML = eval(display.innerHTML);
    } else {
      display.innerHTML += event.target.value;
    }
  };

  const equal = document.createElement("input");
  equal.type = "button";
  equal.value = "=";

  equal.classList.add("result", "input-calc-btn");
  equal.addEventListener("click", function () {
    display.innerHTML = eval(display.innerHTML);
  });

  const clear = document.createElement("input");
  clear.type = "button";
  clear.value = "clear";

  clear.classList.add("result", "input-calc-btn");
  clear.addEventListener("click", function () {
    display.innerHTML = "0";
  });

  fragment.append(clear);
  fragment.append(equal);

  const buttons = [
    { value: "+", id: "plus", handler: mainBtnHandler },
    { value: "-", id: "minus", handler: mainBtnHandler },
    { value: "/", id: "div", handler: mainBtnHandler },
    { value: "*", id: "mult", handler: mainBtnHandler },
    { value: "1", id: "btn1", handler: mainBtnHandler },
    { value: "2", id: "btn2", handler: mainBtnHandler },
    { value: "3", id: "btn3", handler: mainBtnHandler },
    {
      value: "%",
      id: "percent",
      className: "",
      handler: () => (display.innerHTML = display.innerHTML / 100),
    },
    { value: "4", id: "btn4", handler: mainBtnHandler },
    { value: "5", id: "btn5", handler: mainBtnHandler },
    { value: "6", id: "btn6", handler: mainBtnHandler },
    {
      value: "x^2",
      id: "power",

      handler: () =>
        (display.innerHTML = display.innerHTML * display.innerHTML),
    },
    { value: "7", id: "btn7", handler: mainBtnHandler },
    { value: "8", id: "btn8", handler: mainBtnHandler },
    { value: "9", id: "btn9", handler: mainBtnHandler },
    { value: "0", id: "btn0", handler: mainBtnHandler },
  ];

  buttons.forEach((buttonData) => createButton(buttonData, form));

  return fragment;
}

export { createCalc };
