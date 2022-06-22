// 1
const a = +prompt("Введите первое число");
const b = +prompt("Введите второе число");
alert(a + b);

// 2
function readNumber() {
  while (true) {
    let a = prompt("введите число");
    if (!a) {
      return null;
    }
    if (typeof +a === "number") {
      return +a;
    }
  }
}

// 3
function random(min, max) {
  return Math.random() * max - Math.random() * min;
}

// 4
function randomInteger(min, max) {
  return Math.round(Math.random() * max - Math.random() * min);
}
