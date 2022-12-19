function getCount(str) {
    let counter = 0
  strSplit = str.split("")
  for(let i = 0; i < strSplit.length; i++) {
    switch(strSplit[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u": counter++
    break;
    }
  }
  return counter
}

getCount("abracadabra")