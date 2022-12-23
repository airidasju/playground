// 6 kyu

function digitalRoot(n) {
    let sum = 0;
    let numArr = String(n).split("").map((n)=>{
        return Number(n)
      })
      for(let i=0; i < numArr.length; i++) {
        sum += numArr[i]
       
    }
    console.log(sum)
     if(sum < 10) {
            console.log("answer", sum)
            return sum
        } else if (sum > 10) {
            console.log("recursive",sum)
            digitalRoot(sum)
        }
   
}

//   console.log(digitalRoot(16))
 console.log(digitalRoot(493193))
