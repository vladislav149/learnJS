const buttonNum = document.querySelectorAll('.calc__btn--num');
const buttonOperation = document.querySelectorAll('.calc__btn--operation');
const buttonEquals = document.querySelector('.calc__btn--equals');
const inputResult = document.querySelector('.calc__result');
let a;
let b;
let c;
let d;

buttonNum.forEach(function (item) {
  item.addEventListener("click", handler1)
});

buttonOperation.forEach(function (item) {
  item.addEventListener("click", handler2)
});

buttonEquals.addEventListener("click", handler3);

function handler1() {
  let buttonNum = this.textContent;
  if (!+inputResult.value) {
    inputResult.value = buttonNum;
  } else {
    inputResult.value += buttonNum;
  }
}

function handler2() {
  a = inputResult.value;
  console.log(a);
  inputResult.value = this.textContent;
  console.log(inputResult.value);

  c = inputResult.value
}

function handler3() {
  console.log(c);
  b = inputResult.value;

  switch (c) {
    case '+':
      d = +a + +b;
      break;

    case '–':
      d = a - b;
      break;

    case '×':
      d = a * b;
      break;

    case '÷':
      d = a / b;
      break;

    default:
      d = 'unknown operation ';
  }

  inputResult.value = d;
}