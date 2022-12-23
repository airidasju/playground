// 6 kyu

function findOdd(A) {
    const sortedArr = A.sort((a, b) => a - b)
    let counter = 1;
    for(let i = 0; i <sortedArr.length; i++) {

    if( i !== 0 && sortedArr[i] == sortedArr[i - 1] ){
        counter++
        }

        
        if(sortedArr[i] !== sortedArr[i + 1]){
            if(counter % 2 !== 0) {
            return sortedArr[i]
                    }
             counter = 0
             counter++
        }
    }
    return 0;
  }


  findOdd([-2,-2,-1,-1,1,1,2,2,3,3,4,4,5,5,5,20,20])