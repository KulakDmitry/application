let answerText;
let smile;
let answerBlock;

function isTriangle(sides) {
  const side = {};

  side.a = sides[0];
  side.b = sides[1];
  side.c = sides[2];

  const low = sides[3];
  const upp = sides[4];

  renderAnswerBlock();

  side.a + side.b > side.c &&
  side.a + side.c > side.b &&
  side.b + side.c > side.a
    ? answer("можно", ":)", "rgb(115, 209, 100)")
    : answer("нельзя", ":(", "rgb(252, 64, 64)");

  if (inRange(side, upp, low)) {
    renderAnswer(sides, answerText, smile, upp, low);
  }
}

function renderAnswerBlock() {
  const answer = document.querySelector("#answer-list");
  answerBlock = document.createElement("div");
  answerBlock.id = "answer";
  answerBlock.classList.add("answer", "animation-answer");
  answer.append(answerBlock);
}

function renderDelButton() {
  const delButton = document.createElement("button");
  delButton.innerHTML = "X";
  delButton.className = "del-btn";

  answerBlock.prepend(delButton);

  delButton.addEventListener("click", eventDelAnswer);
}

function eventDelAnswer() {
  this.parentNode.remove();
}

function answer(message, answerSmile, bgColor) {
  answerText = message;
  smile = answerSmile;
  answerBlock.style.backgroundColor = bgColor;
}

function renderAnswer(sides, answerText, smile, upp, low) {
  answerBlock.innerHTML = `На сторонах ${sides[0]}, ${sides[1]}, ${sides[2]} в пределах от ${low} до ${upp}`;
  const answerTriangle = document.createElement("p");
  answerTriangle.innerHTML = `${answerText} построить треугольник ${smile}`;
  renderDelButton();
  answerBlock.append(answerTriangle);
}

function inRange(side, upp, low) {
  let condition = true;
  renderDelButton();
  for (let i in side) {
    if (side[i] > upp || side[i] < low) {
      const text = document.createElement("p");
      text.innerHTML = `сторона ${i} = ${side[i]}: не может быть использована т.к. должна быть в пределах от ${low} до ${upp} `;
      answerBlock.style.backgroundColor = "rgb(250, 225, 5)";

      answerBlock.append(text);
      condition = false;
    }
  }
  return condition;
}

export { isTriangle };
