// 1
function sum(a) {
  return function (b) {
    return a + b;
  };
}

// 2
function inBetween(a, b) {
  return function (arrItem) {
    return arrItem >= a && arrItem <= b;
  };
}

function inArray(array) {
  return function (arrItem) {
    return array.includes(arrItem);
  };
}

// 3
function byField(fuildName) {
  return function (a, b) {
    return a[fuildName] > b[fuildName] ? 1 : -1;
  };
}

// 4
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();
