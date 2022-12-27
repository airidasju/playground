// 6 kyu

function likes(names) {
    let answer;
    if(names.length == 0) {
        answer =  "no one likes this"
    }
    if(names.length == 1) {
        answer = `${names[0]} likes this`
    }
    if(names.length == 2) {
        answer = `${names[0]} and ${names[1]} like this`
    }

    if(names.length == 3) {
        answer = `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
       const nameCount = names.length - 2
    
    if(names.length > 3) {
        answer = `${names[0]}, ${names[1]} and ${nameCount} others like this`
    }
    return answer
  }



  likes(['Alex', 'Jacob'])