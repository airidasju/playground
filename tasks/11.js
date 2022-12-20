function descendingOrder(n){
    let highestNum;
    let finishedArr = []
    let numArr = String(n).split("").map((n)=>{
        return Number(n)
    })
    let initialLength = numArr.length
    for(let i=0; i < initialLength; i++) {
        let index = numArr.indexOf(Math.max(...numArr))
        highestNum =  Math.max(...numArr)
        numArrCopy = numArr.splice(index, 1)
        console.log(numArrCopy)
        finishedArr.push(highestNum)
    }
    let reversed = finishedArr.join("")

    return Number(reversed)
  }

  descendingOrder(123456789)