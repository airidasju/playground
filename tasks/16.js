// 8 kyu

const hotpo = function(n){
    for(let i = 0; n == 1; i++) {
      
      if(n % 2 == 0) {
        n = n/2
      } else if (n % 2 !== 0 ) {
                 n = 3 * n + 1
                 }
                 console.log(i)
     return i  
    }
  }

  hotpo(23)