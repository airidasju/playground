// 6 kyu

function solution(number){
    let num = Number(number)
    let numArr = []
    let dividiblesArr = []
    let sum = 0;
    for(let i = 1; i < num; i++) {
        numArr.push(i)
    }

    for(let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 3 == 0  || numArr[i] % 5 == 0) {
            dividiblesArr.push(numArr[i])
            sum += numArr[i]
        }
    }
    return sum;
}



solution(10)