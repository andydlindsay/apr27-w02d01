const numberOfVowels = (str) => {
  let numVowels = 0;
  // declare the options
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // iterate through the string
  for (const char of str) {
    // compare each char against the options array
    if (vowels.includes(char)) {
      // if val in array, increment numVowels
      numVowels++;
    }
  }

  return numVowels;
};

module.exports = numberOfVowels;
