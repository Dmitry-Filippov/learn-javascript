// 1
const date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// 2
function getWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      return "ВС";
    case 1:
      return "ПН";
    case 2:
      return "ВТ";
    case 3:
      return "СР";
    case 4:
      return "ЧТ";
    case 5:
      return "ПТ";
    case 6:
      return "СБ";
  }
}

// 3
function getLocalDay(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}

// 4
function getDateAgo(date, days) {
  const anotherDate = new Date(date);
  anotherDate.setDate(date.getDate() - days);
  return anotherDate.getDate();
}

// 5
function getLastDayOfMonth(year, month) {
  const date = new Date(+year, +month + 1, 0);
  return date.getDate();
}

// 6
function getSecondsToday() {
  const now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

// 7
function getSecondsToTomorrow() {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return (tomorrow - now) / 1000;
}

// 8
function formatDate(date) {
  const now = new Date();
  const difference = now - date;
  const s = difference / 1000;
  const m = s / 60;
  const h = m / 60;
  const year = date.getFullYear().toString();
  if (s < 1) {
    return "прямо сейчас";
  } else if (m < 1) {
    return `${s} сек. назад`;
  } else if (h < 1) {
    return `${m} мин. назад`;
  } else {
    return `0${date.getDate()}.0${date.getMonth() + 1}.${year.split("")[2]}${
      year.split("")[3]
    } ${date.getHours()}:${date.getMinutes()}`;
  }
}
