// 1
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function anotherCheckAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

// 2
function min(a, b) {
  return a - b > 0 ? b : a;
}

// 3
function pow(x, n) {
  return x ** n;
}

