// 6 kyu

function wave(str){
    const result = []
    let upperArray = []
    let upperLetter;
    let strArr = str.split('')
    let length = strArr.length
    for(let i=0; i < length; i++) {
        upperArray.push(strArr)
        // console.log(upperArray)
    }
    
    for(let i=0; i < length; i++) {
        if(upperArray[i][i] == upperArray[i][i].toLowerCase()) {
            letter = upperArray[i][i].toUpperCase()
            result.push(letter, [...upperArray[i][i].toLowerCase()])
        }
        // result.push(upperArray[i][i].toUpperCase())
    }
    console.log(result)
}


  wave("codewars")