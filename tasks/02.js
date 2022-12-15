const quarterOf = (month) => {
  let quarter;
    if (month < 4) {
      quarter = 1;
    }
    else if (month > 3 && month < 7) {
        quarter = 2;
    }
      else if (month > 6 && month < 10){
        quarter = 3;
    }
    else if (month > 9){
        quarter = 4;
    }
  console.log(quarter)
  return quarter;
};

quarterOf(3)