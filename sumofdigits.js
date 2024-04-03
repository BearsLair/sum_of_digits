function digitalRoot(n) {
  let numArray = [];

  reduceToSingleDigit();

  function reduceToSingleDigit() {
    numArray = Array.from(String(n), Number);
    numArray.reduce((acc, curr) => acc + curr);
    numArray = Array.from(String(n), Number);

    if (numArray.length > 1) {
      reduceToSingleDigit();
    } else {
      return numArray[0];
    }
  }
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
