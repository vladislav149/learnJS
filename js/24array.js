let styles = [
  'Джаз',
  'Блюз',
];

styles.push('Рок - н - ролл');
console.log(styles);
styles[Math.trunc(styles.length / 2)] = 'Классика';
styles.shift()
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);