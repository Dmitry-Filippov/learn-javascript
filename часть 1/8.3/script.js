// 1
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f(str) {
  console.log(str);
}

// 2
Function.prototype.defer = function (ms) {
  let func = this;
  return function () {
    setTimeout(() => {
      func(...arguments);
    }, ms);
  };
};

f.defer(2000)("hello");
