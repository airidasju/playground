function disemvowel(str) {
    const reg1 = /[aeiou]/gi
    let newStr =  str.replace(reg1, "")
    return newStr
  }