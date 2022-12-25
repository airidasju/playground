// 8 kyu

const hotpo = function (n) {
  let counter = 0;
  while (n !== 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else if (n % 2 !== 0) {
      n = 3 * n + 1;
    }
    counter++;
  }
  return counter;
};

hotpo(23);
