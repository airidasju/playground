function createPhoneNumber(numbers){
    const firstThree = numbers.slice(0, 3).join("")
    const middleNum = numbers.slice(3, 6).join("")
    const lastFour = numbers.slice(6, 10).join("")
    return `(${firstThree}) ${middleNum}-${lastFour}`
}


createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])