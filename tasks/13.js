// 6 kyu

function wave(str) {
    let result = [];
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        let newStr = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);
        result.push(newStr);
      }
    }
    console.log(result)
    return result;
  }


  wave("two words")

  //'Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS'
