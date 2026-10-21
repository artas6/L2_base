function expandedForm(num) {
  const str = String(num);
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      const zeros = '0'.repeat(str.length - i - 1);
      result.push(str[i] + zeros);
    }
  }

  return result.join(' + ');
}