function toWeirdCase(string) {
  const words = string.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let newWord = "";

    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) {
        newWord += word[j].toUpperCase();
      } else {
        newWord += word[j].toLowerCase();
      }
    }

    result.push(newWord);
  }

  return result.join(" ");
}