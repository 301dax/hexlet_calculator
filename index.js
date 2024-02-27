const readlineSync = require('readline-sync');

const calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = parseFloat(readlineSync.question('Первое значение: '));
    this.b = parseFloat(readlineSync.question('Второе значение: '));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(`Сумма: ${calculator.sum()}`);
console.log(`Произведение: ${calculator.mul()}`);

module.exports = calculator;