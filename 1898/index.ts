function maximumRemovals(s: string, p: string, removable: number[]): number {
  const isSubSeq = (s: string, p: string): boolean => {
    let pIndex = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === p[pIndex]) {
        pIndex++;
      }
    }
    return pIndex === p.length;
  };

  const removeLetters = (s: string, removable: number[]): string => {
    const sArray = s.split('');
    for (let index of removable) {
      sArray[index] = '';
    }
    return sArray.join('');
  };

  const searchMax = (s: string, p: string, removable: number[]): number => {
    let left = 0;
    let right = removable.length;
    while (left < right) {
      console.log(left, right);
      const mid = Math.ceil((left + right) / 2);
      const rmvMid = removable.slice(0, mid);
      const removedString = removeLetters(s, rmvMid);
      console.log(mid, rmvMid, removedString, isSubSeq(removedString, p));
      if (isSubSeq(removedString, p)) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };
  return searchMax(s, p, removable);
}

console.log(maximumRemovals('abcab', 'abc', [0, 1, 2, 3, 4]));
