// 1
function unique(arr) {
  return Array.from(new Set(arr));
}

//2
function aclean(arr) {
  const set = new Set();
  arr.forEach((item) => {
    set.add(item.toLowerCase().split("").sort().join(""));
  });
  return Array.from(set);
}



