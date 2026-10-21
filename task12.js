function longest(arr, n) {
  let copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    copyArr.push(arr[i]);
  }
  for (let i = 0; i < copyArr.length; i++) {
    for (let j = 0; j < copyArr.length - 1; j++) {
      if (copyArr[j].length < copyArr[j + 1].length) {
        let temp = copyArr[j];
        copyArr[j] = copyArr[j + 1];
        copyArr[j + 1] = temp;
      }
    }
  }
  return copyArr[n - 1];
}