function arrayDiff(a, b) {
  if(b[0] == undefined) {
    console.log("empty")
    return a
  }



const filtered = a.filter(val => !b.includes(val));
return filtered
}



arrayDiff([1,2,3], [1,2])