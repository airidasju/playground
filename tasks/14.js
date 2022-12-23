// 6 kyu

function spinWords(string){
    const resultArr = []
    const stringArr = string.split(" ")
    for(let i = 0; i< stringArr.length; i++) {
        if(stringArr[i].length >= 5) {
            resultArr.push(stringArr[i].split("").reverse().join(""));
        } else {
            resultArr.push(stringArr[i])
        }
    }
    return resultArr.join(" ")
  }


  spinWords("Hey fellow warriors")