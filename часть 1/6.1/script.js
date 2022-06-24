// 1
// цикл
function sumTo(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result += i;
  }
  return result;
}
// рекурсия
function sumTo1(n) {
  return n === 1 ? n : n + sumTo1(n - 1);
}
// формула
function sumTo2(n) {
  return (n * (n + 1)) / 2;
}

// 2
function factorial(n) {
  return n === 1 ? n : n * factorial(n - 1);
}

// 3
function fib(n) {
  return n <= 1 ? n : fib(n - 2) + fib(n - 1);
}

// 4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// цикл
function printList(list) {
  let listItem = list;
  while (listItem) {
    console.log(listItem.value);
    listItem = listItem.next;
  }
  return;
}
// рекурсия
function printList1(list) {
  console.log(list.value);
  if (list.next) {
    printList1(list.next);
  }
}

// 5
// цикл
function printReversedList(list) {
  let resultArr = [];
  let listItem = list;
  while (listItem) {
    resultArr.unshift(listItem.value);
    listItem = listItem.next;
  }
  resultArr.forEach((item) => {
    console.log(item);
  });
}
// рекурсия
function printReversedList1(list) {
  if (list.next) {
    printReversedList1(list.next)
  } 
  console.log(list.value)
}

