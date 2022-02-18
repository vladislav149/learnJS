const buttonNum = document.querySelectorAll('.calc__btn--num');
const buttonOperation = document.querySelectorAll('.calc__btn--operation');
const buttonEquals = document.querySelector('.calc__btn--equals');
const inputResult = document.querySelector('.calc__result');
const buttonErase = document.querySelector('.calc__btn--erase');
const buttonReset = document.querySelector('.calc__btn--reset');
let arr = [];
let arrFirstOperand = [];
let arrSecondOperand = [];
let firstOperand;
let secondOperand;
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
  //  console.log(arr);
  //  console.log(arr.length);
  //  if (arr.length === 1) {
  //    let qwe = arr.join('');
  //    console.log(typeof (qwe));
  //    console.log(qwe);
  //    let qwer = qwe.slice(0, -1);
  //    console.log(qwer);
  //    arr[0] = +qwer;
  //    let str = arr.join('');
  //    inputResult.value = str;
  //  } else {
  arr.pop();
  if (arr.length) {
    let str = arr.join('');
    inputResult.value = str;
  } else {
    inputResult.value = '0'
  }
  //  }
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

  if (firstOperand === '' || +secondOperand !== +secondOperand) {
    return
  } else {
    switch (operator) {
      case '+':
        result = +firstOperand + +secondOperand;
        break;

      case '–':
        result = firstOperand - secondOperand;
        break;

      case '×':
        result = firstOperand * secondOperand;
        break;

      case '÷':
        result = firstOperand / secondOperand;
        break;

      default:
    };
    inputResult.value = result;
    arr = [];
    arr[0] = result;
  }
}

function getFirstOperand(operatorIndex) {
  arrFirstOperand = arr.slice(0, operatorIndex);
  firstOperand = arrFirstOperand.join('');
}

function getSecondOperand(operatorIndex) {
  arrSecondOperand = arr.slice(operatorIndex - arr.length + 1);
  secondOperand = arrSecondOperand.join('');
}

function getOperator(operatorIndex) {
  operator = arr[operatorIndex];
}