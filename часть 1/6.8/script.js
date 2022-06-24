// 1
// setInterval
function printNumbers(from, to) {
  let counter = from;
  const interval = setInterval(() => {
    console.log(counter++);
    if (counter > to) {
      clearInterval(interval);
    }
  }, 1000);
}
// setTimeout
function printNumbers1(from, to) {
  setTimeout(() => {
    console.log(from);
    if (from === to) {
      return;
    } else {
      printNumbers1(from + 1, to);
    }
  }, 1000);
}

