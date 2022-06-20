// задача 1
function getOffisialName() {
  const name = prompt("Какое «официальное» название JavaScript?");
  if (name === "ECMAScript") {
    alert("Верно!");
  } else {
    alert("Не знаете? ECMAScript!");
  }
}
getOffisialName();

// задача 2
function isNumberZero() {
  const num = prompt("введите число");
  if (num < 0) {
    alert(-1);
  } else if (num == 0) {
    alert(0);
  } else if (num > 0) {
    alert(1);
  }
}
isNumberZero();

// задача 3
const result = a + b < 4 ? "мало" : "Много";

// задача 4
const message =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";
