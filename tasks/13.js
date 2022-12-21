// 6 kyu

function wave(str){
    const result = []
    let upperArray = []
    let changed;
    let strArr = str.split('')
    let length = str.length
    let index;
    for(let i=0; i < length; i++) {
        upperArray.push(strArr)
    }
    // console.log(upperArray)
    
    for(let i=0; i < length; i++) {
            // index = upperArray[i].indexOf(upperArray[i][i])
            // letter = upperArray[i][i].toUpperCase()
            // // console.log(letter, index)
            upperArray[i][i] = upperArray[i][i].toUpperCase()
        }
        console.log(upperArray)
}


  wave("codewars")