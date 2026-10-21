function hasTwoCubeSums(n) {
  let count = 0;
  const maxA = Math.cbrt(n);

  for (let a = 1; a <= maxA; a++) {
    const remainder = n - (a * a * a);
    const b = Math.cbrt(remainder);
    
    if (Number.isInteger(b) && b >= a) {
      count++;
      if (count >= 2) {
        return true;
      }
    }
  }

  return false;
}