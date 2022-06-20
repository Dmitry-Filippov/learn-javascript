// 1
if (age >= 14 && age <= 90) {
  return true;
}

// 2
if (!(age >= 14 && age <= 90)) {
  return true;
}
if (age < 14 || age > 90) {
  return true;
}

// 3
function auth() {
  const user = prompt("кто там?");
  if (user === "Админ") {
    const password = prompt("пароль?");
    if (password === "Я главный") {
      alert("Здравствуйте!");
    } else if (!password) {
      alert("Отменено");
    } else {
      alert("Неверный пароль");
    }
  } else if (!user) {
    alert("Отменено");
  } else {
    alert("Я вас не знаю");
  }
}
