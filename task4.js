function findMissing(list) {
  const length = list.length;
  const step = (list[length - 1] - list[0]) / length;
  
  for (let i = 0; i < length - 1; i++) {
    const diff = list[i + 1] - list[i];
    if (diff !== step) {
      return list[i] + step;
    }
  }
  
  return list[0];
}