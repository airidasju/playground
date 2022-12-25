function timeCorrect(timestring) {
  let minuteCounter;
  let secondCounter;

  if (typeof timestring !== 'string') {
    return null;
  } else if (timestring == '') {
    return '';
  }

  let strArr = timestring.split(':');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match('[a-zA-Z]+')) {
      return null;
    }
  }

  if (strArr.length == 1) {
    return null;
  }

  if (strArr[2] >= 60) {
    for (let i = strArr[2]; i >= 0; i -= 60) {
      strArr[2] = i;
      secondCounter = 1;
    }
    strArr[1] = strArr[1] * 1;
    strArr[1] = strArr[1] + 1;
    if (strArr[2] < 10) {
      strArr[2] = strArr[2].toString();
      strArr[2] = '0' + strArr[2];
    }
  }

  if (strArr[1] >= 60) {
    for (let i = strArr[1]; i >= 0; i -= 60) {
      strArr[1] = i;
      minuteCounter = 1;
    }
    strArr[0] = strArr[0] * 1;
    strArr[0] = strArr[0] + 1;
    if (strArr[1] < 10) {
      strArr[1] = strArr[1].toString();
      strArr[1] = '0' + strArr[1];
    }
  }

  if (strArr[0] >= 24) {
    for (let i = strArr[0]; i >= 0; i -= 24) {
      strArr[0] = i;
    }

    if (strArr[0] < 10) {
      strArr[0] = strArr[0].toString();
      strArr[0] = '0' + strArr[0];
    }
  }
  console.log(strArr);
  let correctedStr = strArr.join(':');
  console.log(correctedStr);
  return correctedStr;
}

timeCorrect('11:70:10');
timeCorrect('19:99:99');
timeCorrect('24:01:01');
