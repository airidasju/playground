function highAndLow(numbers) {
  let numArr = String(numbers)
    .split(' ')
    .map((numbers) => {
      return Number(numbers);
    });
  let lowest = numArr[0];
  let highest = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] < lowest) {
      lowest = numArr[i];
    }
    if (numArr[i] > highest) {
      highest = numArr[i];
    }
  }

  let answer = String(highest) + ' ' + String(lowest);
  return answer;
}

highAndLow(
  '-3481 -3786 -1583 -1408 -2896 -4176 -1521 -2746 -1080 -2393 -1496 -2565 -2291 -3507 -1957 -3716 -2636 -4152 -3004 -3224 -2991',
);
