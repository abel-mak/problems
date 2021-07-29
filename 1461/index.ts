function hasAllCodes(s: string, k: number): boolean {
  const stringSet = new Set();
  for (let i = 0; i <= s.length - k; i++) {
    let stringSec = new String();
    for (let j = 0; j < k; j++) {
      stringSec += s[i+j];
    }
    stringSet.add(stringSec);
  }

  console.log(stringSet)
  if (stringSet.size < 2 ** k)
    return false;
  
  return true;
};

console.log(hasAllCodes("00110", 2));