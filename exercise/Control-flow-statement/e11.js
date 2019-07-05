let line = '';
for (let i = 1; i <= 5; i++) {
  for (let a = 0; a < i; a++) {
    line += '*';
  }
  line += '\n';
}
console.log(line);
