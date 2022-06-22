// 1
function Calculator() {
  this.read = () => {
    this.a = +prompt("Введите первое число");
    this.b = +prompt("Ввеедите второе число");
  };
  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  };
}

// 2
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("Введите число");
  };
}
