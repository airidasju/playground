function cupAndBalls(b, arr) {
  let bigArr = arr;
  let smallestArr = bigArr;

  for (let z = 0; z < bigArr.length; z++) {

      if(bigArr[z][1] == b) {
        b = bigArr[z][0]
      } else if (bigArr[z][0] == b) {
          b = bigArr[z][1]
    }
  }
  console.log(b)
}

// cupAndBalls(2, [[1, 2]]);
// cupAndBalls(1,[[2,3],[1,2],[1,2]])
cupAndBalls(2,[[1,3],[1,2],[2,1],[2,3]])
