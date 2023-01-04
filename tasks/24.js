// 6 kyu

function isValidWalk(walk) {
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  if (walk.length != 10) {
    console.log('false');
    return false;
  }

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        n++;
        break;
      case 's':
        s++;
        break;
      case 'w':
        w++;
        break;
      case 'e':
        e++;
        break;
    }
  }

  if (s == n && w == e) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
