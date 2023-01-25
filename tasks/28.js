 
function findEvenIndex(arr)
{
    let sumA = 0;
    let sumB = 0;
    const middleOfArr = Math.ceil(arr.length/2 - 0.5)

    // if(arr / 2 != 0) {
        
        // console.log(middleOfArr)
        
        for(let i = 0; i < arr.length; i++) {
            if(arr[arr.length - i] > arr[i]) {
                sumA += arr[i]
            } else {
                sumB += arr[arr.length - i]
            }
            console.log(arr[i], arr[arr.length - i])
        }

    // } else {
    //     const middleOfArr = arr.length/2
    //     console.log(middleOfArr) 
    // }
    

}

findEvenIndex([1,2,3,4,5,6])