// 1
function camelize(str) {
  const arr = str.split("-");
  const returnArr = [];
  arr.forEach((item, i) => {
    if (i > 0) {
      returnArr.push(item[0].toUpperCase() + item.slice(1));
    } else {
      returnArr.push(item);
    }
  });
  return returnArr.join("");
}

// 2
function filterRange(arr, a, b) {
  let returnArr = [];
  arr.forEach((item) => {
    if (item >= a && item <= b) {
      returnArr.push(item);
    }
  });
  return returnArr;
}

// 3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// 4
function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}

// 5
function copySorted(arr) {
  return arr.slice().sort();
}

// 6
function Calculator() {
  this.methods = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
  };

  this.calculate = (str) => {
    const arr = str.split(" ");
    return this.methods[arr[1]](+arr[0], +arr[2]);
  };

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
}

// 7
function getUsersNames(users) {
  return users.map((user) => user.name);
}

// 8
function transformUsers(users) {
  return users.map((user) => {
    const fullName = user.name + " " + user.surname;
    return {
      id: user.id,
      fullName: fullName,
    };
  });
}

// 9
function sortByAge(users) {
  return users.sort((a, b) => {
    return a.age - b.age;
  });
}

// 10
function shuffle(array) {
  array.forEach((item, i) => {
    if (i > 0) {
      let initItem = item;
      index = Math.random() * i;
      item = array[index];
      array[index] = initItem;
    }
  });
}

// 11
function getAverageAge(users) {
  let sum = 0;
  users.forEach((user) => {
    sum += user.age;
  });
  return sum / users.length;
}

// 12
function unique(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}
