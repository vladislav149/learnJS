function calc(mathSymbol,a,b) {
  if (a == '' || b == '' || a !== a || b !== b) {
    return 'error';
  }

  switch (mathSymbol) {
    case '+':
      return a + b;
    
    case '-':
      return a - b;

    case '*':
      return a * b;
    
    case '/':
      return a / b;

    case '**':
      return a ** b;

    case '%':
      return a % b;
    
    default:
      return 'unknown operation';
  }
}

let a = prompt('Введите a', '');
let b = prompt('Введите b', '');
let mathSymbol = prompt('Какое действие будем производить( + , - , * , / , ** , % )?', '');
alert(calc(mathSymbol,+a,+b));