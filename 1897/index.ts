function makeEqual(words: string[]): boolean {
  const hashSet: { [key: string]: number } = {};
  for (const word of words) {
    for (const char of word) {
      if (!(char in hashSet)) hashSet[char] = 0;
      hashSet[char]++;
    }
  }
  return Object.values(hashSet).every((count) => count % words.length === 0);
}

console.log(makeEqual(['abc', 'aabc', 'bc']));
