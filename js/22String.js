//showVerticalMessage('марафон')

function showVerticalMessage(message) {
  const isMessageStartM = message[0] === 'м';
  const isLengthMessage = message.length;
  let verticalMessage = ''

  if (isMessageStartM) {
    message = message[0].toUpperCase() + message.slice(1);
  }


  if (isLengthMessage > 10) {
    message = message.slice(0, 10);
  }

  for (char of message) {
    verticalMessage += char + '\n'
  }
  console.log(verticalMessage);
}

showVerticalMessage('мавританец');
showVerticalMessage('тут больше 10 букв');
showVerticalMessage('не буква м');
showVerticalMessage('');