const buttonNum = document.querySelectorAll('.calc__btn--num');
const buttonOperation = document.querySelectorAll('.calc__btn--operation');
const buttonEquals = document.querySelector('.calc__btn--equals');
const inputResult = document.querySelector('.calc__result');
const buttonErase = document.querySelector('.calc__btn--erase');
const buttonReset = document.querySelector('.calc__btn--reset');
let arr = [];
let a = [];
let b = [];
let c;
let d;
let operator;
let result;

buttonNum.forEach(function (item) {
  item.addEventListener("click", showNumber)
});

buttonOperation.forEach(function (item) {
  item.addEventListener("click", showOperation)
});

buttonErase.addEventListener("click", inputErase);

buttonReset.addEventListener("click", inputReset);

buttonEquals.addEventListener("click", showResult);

function showNumber() {
  if (this.textContent === '0' && arr.length === 0 || this.textContent === '0' && typeof (arr[arr.length - 1]) !== "number") {
    return
  } else {
    arr.push(+this.textContent);
    arrToString();
  }
}

function showOperation() {
  if (typeof (arr[arr.length - 1]) === "number") {
    arr.push(this.textContent);
    arrToString();
  } else {
    arr.pop();
    arr.push(this.textContent);
    arrToString(); //тут (1)
  }
}

function inputErase() {
  arr.pop();
  if (arr.length) {
    let str = arr.join('');
    inputResult.value = str;
  } else {
    inputResult.value = '0'
  }
}

function inputReset() {
  arr = [];
}

function arrToString() { //и тут (1)
  let str = arr.join('');
  inputResult.value = str;
}

function showResult() {
  let operatorIndex = arr.findIndex(item => typeof (item) !== "number")
  getFirstOperand(operatorIndex); //тут (2)
  getSecondOperand(operatorIndex); //тут (2)
  getOperator(operatorIndex); //тут (2)
  if (c === '' || +d !== +d) {
    return
  } else {
    switch (operator) {
      case '+':
        result = +c + +d;
        break;

      case '–':
        result = c - d;
        break;

      case '×':
        result = c * d;
        break;

      case '÷':
        result = c / d;
        break;

      default:
    };
    inputResult.value = result;
    let abc = String(result);
    arr = abc.split('');
    arr = arr.map(item => +item)
  }
}

function getFirstOperand(operatorIndex) { //и тут (2)
  a = arr.slice(0, operatorIndex);
  c = a.join('');
}

function getSecondOperand(operatorIndex) { //и тут (2)
  b = arr.slice(operatorIndex - arr.length + 1);
  d = b.join('');
}

function getOperator(operatorIndex) { //и тут (2)
  operator = arr[operatorIndex];
}