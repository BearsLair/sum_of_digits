function digitalRoot(n) {
  const numArray = Array.from(String(n), Number);
  return numArray.reduce((acc, curr) => acc + curr);
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
