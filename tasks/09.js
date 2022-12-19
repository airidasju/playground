function squareDigits(num){
    numArr = num.split("")
    for(let i = 0; i < numArr.length; i++) {
        numArr[i] * numArr[i]
        console.log(numArr)
    }
  }


  squareDigits(2112)