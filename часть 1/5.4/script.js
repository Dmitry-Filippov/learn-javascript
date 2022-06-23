// 1
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
function editCenter(arr, str) {
  arr[Math.round((arr.length - 1) / 2)] = str;
}
editCenter(styles, "Классика");
console.log(styles.shift());
styles.unshift("Рэп", "Рэгги");

// 2
const sumInput = () => {
  const numbers = [];
  while (true) {
    const input = prompt("enter a number");
    if (!input || typeof +input !== "number") {
      break;
    }
    numbers.push(+input);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

// 3
function getMaxSubSum(arr) {
  let current = 0;
  let max = 0;
  for (let i of arr) {
    current += i;
    if (current > max) {
      max = current;
    }
    if (current < 0) {
      current = 0;
    }
  }
  return max;
}
