// 6 kyu

function digitalRoot(n) {
  let sum = 0;
  let numArr = String(n)
    .split('')
    .map((n) => {
      return Number(n);
    });
  console.log(numArr);
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  if (sum < 10) {
    return sum;
  } else if (sum >= 10) {
    return digitalRoot(sum);
  }
}

console.log(digitalRoot(649206));
