function squareDigits(num) {
  numArr = String(num)
    .split('')
    .map((num) => {
      return Number(num);
    });
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = numArr[i] * numArr[i];
  }
  numArr = numArr.join('');
  return Number(numArr);
}

squareDigits(2112);
