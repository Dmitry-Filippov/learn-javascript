// 1
function sumSalaries(salaries) {
  let sum = 0;
  for (let i of Object.values(salaries)) {
    sum += i;
  }
  return sum;
}

// 2
function count(obj) {
  return Object.keys(obj).length;
}
