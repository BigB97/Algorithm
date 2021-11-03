function checkVowel(array) {
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if (vowel.includes(array[i])) {
      result += array[i].length;
    }
  }
  return result;
}

console.log(checkVowel(['e', 'b', 'a', 't', 'u', 'o']));
