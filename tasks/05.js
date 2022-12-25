function prevMultOfThree(n) {
  if (n % 3 == 0) {
    return n;
  }

  nArray = n.toString().split('');
  let arrLength = nArray.length;
  for (let i = 0; i < arrLength; i++) {
    num = nArray.splice(-1);
    nNum = nArray.join('');
    if (nNum % 3 == 0) {
      nNum = Number(nNum);
      if (nNum == 0) {
        return null;
      }
      return nNum;
    }
  }
}

prevMultOfThree(25);
