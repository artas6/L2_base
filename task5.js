function primeFactors(n) {
  let result = "";
  let divisor = 2;

  while (n > 1) {
    let count = 0;
    
    while (n % divisor === 0) {
      count++;
      n /= divisor;
    }
    
    if (count > 0) {
      if (count === 1) {
        result += `(${divisor})`;
      } else {
        result += `(${divisor}**${count})`;
      }
    }
    
    divisor++;
  }

  return result;
}