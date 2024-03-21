function findNumber(start, end, divisor) {
    for (let i = start; i<=end; i++ ){
      
      if (i % divisor === 0){
            return i;
      }
    }
  }
  console.log (findNumber(40, 55, 46));