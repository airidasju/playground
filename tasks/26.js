// 6 kyu


const uniqueInOrder = function(iterable){
    if (typeof iterable == 'string') {
        iterable = iterable.split('').sort((a, b) => a - b)
    } else {
        iterable = iterable.sort((a, b) => a - b)
    }
    
    for(let i = 0; i < iterable.length; i++) {
        if(iterable[i] == iterable[i+1]){
            iterable.splice(i, 1)
            i--
        }
    }
    return iterable
    console.log(iterable)
  }


  uniqueInOrder('AAAABBBCCDAABBB')