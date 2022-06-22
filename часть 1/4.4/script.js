// 1
const calculator = {
  read() {
    this.a = +prompt("ВВедите первое значение");
    this.b = +prompt("ВВедите второе значение");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// 2
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};
