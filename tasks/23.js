// 6 kyu

function duplicateCount(text) {
  const strArr = text.toLowerCase().split('').sort();
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == strArr[i + 1] && strArr[i] != strArr[i + 2]) {
      count++;
    }
  }
  return count;
}

duplicateCount('Indivisibilities');
