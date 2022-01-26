function calc(mathSymbol,a,b) {
  const isValueNoValid = typeof(a) !== 'number' || typeof(b) !== 'number';
  
  if (isValueNoValid) {
    return 'error';
  }

  const mathOperations = {
    sum: a + b,
    sub: a - b,
    mult: a * b,
    div: a / b,
    pow: a ** b,
    rem: a % b
  }

  if (mathOperations[mathSymbol] === undefined) {
    return 'unknown operation'
  } else {
  return mathOperations[mathSymbol]
  }
}

console.log(calc('sum',12,13));
console.log(calc('su',12,13));
console.log(calc('',12,13));
console.log(calc('pow','text',13));
console.log(calc('div',12,''));