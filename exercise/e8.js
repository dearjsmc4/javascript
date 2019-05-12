let a = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    a += i;
  }
}
console.log(a);
