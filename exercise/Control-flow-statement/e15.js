let line = '';
for (let i = 1; i <= 5; i++) {
  for (let s = 5; s > i; s--) {
    line += ' ';
  }
  for (let a = 0; a < i * 2 - 1; a++) {
    line += '*';
  }
  line += '\n';
}
console.log(line);
