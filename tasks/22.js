// 6kyu

function findOutlier(integers){
    let newArray = []
    for(let i=0; i<integers.length; i++) {
        if(integers[i] % 2 !== 0){
            newArray.push(integers[i])
        }
    }


    if(newArray.length > 1) {
        for(let i=0; i<integers.length; i++) {
            if(integers[i] % 2 == 0){
                return integers[i]
            }
        }  
    } else {
        return newArray[0]
    }
  }



findOutlier([1, 2, 3])