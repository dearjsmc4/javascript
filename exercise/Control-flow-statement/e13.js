let line = '';
for (let i = 5; i >= 1; i--) {
  for (let a = 0; a < i; a++) {
    line += '*';
  }
  line += '\n';
}
console.log(line);
