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

  const searchMax = (
    s: string,
    p: string,
    removable: number[],
    left: number,
    right: number
  ): number => {
    console.log(left, right);
    if (right - left <= 0) return left;
    const mid = Math.ceil((left + right) / 2);
    const rmvMid = removable.slice(0, mid);
    const removedString = removeLetters(s, rmvMid);
    console.log(mid, rmvMid, removedString, isSubSeq(removedString, p));
    if (isSubSeq(removedString, p)) {
      return searchMax(s, p, removable, mid, right);
    } else {
      return searchMax(s, p, removable, left, mid - 1);
    }
  };

  return searchMax(s, p, removable, 1, removable.length);
}

console.log(maximumRemovals('abcacb', 'ab', [3, 1, 0]));
