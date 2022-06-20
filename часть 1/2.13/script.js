// 1
for (let i = 2; i < 11; i++) {
  i % 2 ? null : console.log(i);
}

// 2
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// 3
let n;
do {
  n = prompt("число больше 100");
} while (n <= 100 && n);
