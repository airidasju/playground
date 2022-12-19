function highAndLow(numbers){
    let lowest = numbers[0];
    let highest =  numbers[0];
    let numArr = String(numbers).split(" ").map((numbers)=>{
        return Number(numbers)
      })
      for(let i = 1; i < numArr.length; i++) {
        if(numArr[i] < lowest) {
            lowest = numArr[i]
            console.log("asd")
        }
        if(numArr[i] > highest) {
            highest = numArr[i]
            console.log(highest)
        }
    }
    let answer = String(highest) + " " + String(lowest)
    return answer
  }

  highAndLow("-24 -577 -982 -613 110 -1030 505 -287 -953 -1671 642 -1765 -487 -939 -756 1211 1281 -1068 879 -909 962")