function checkVowel(array) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (vowel.includes(array[i])) count++;
  }
  return count;
}

console.log(checkVowel(['e', 'b', 'a', 't', 'u', 'o']));
