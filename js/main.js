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
  let arrCopy = arr.slice(0);
  arrCopy.push(this.textContent)
  let arrOperation = arrCopy.filter(item => {
    if (typeof (item) === "string") {
      return true
    }
  });

  if ((typeof (arr[arr.length - 1]) === "number") && (arrOperation.length <= 1)) {
    arr.push(this.textContent);
    arrToString();
  } else if ((typeof (arr[arr.length - 1]) !== "number") && (arr.length > 0)) {
    arr.pop();
    arr.push(this.textContent);
    arrToString();
  } else {
    return
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

function arrToString() {
  let str = arr.join('');
  inputResult.value = str;
}

function showResult() {
  let operatorIndex = arr.findIndex(item => typeof (item) !== "number")
  getFirstOperand(operatorIndex);
  getSecondOperand(operatorIndex);
  getOperator(operatorIndex);

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
    arr = [];
    arr[0] = result;
  }
}

function getFirstOperand(operatorIndex) {
  a = arr.slice(0, operatorIndex);
  c = a.join('');
}

function getSecondOperand(operatorIndex) {
  b = arr.slice(operatorIndex - arr.length + 1);
  d = b.join('');
}

function getOperator(operatorIndex) {
  operator = arr[operatorIndex];
}