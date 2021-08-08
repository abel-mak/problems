function longestDiverseString(a: number, b: number, c: number): string {
  const max = (s: string[]): string =>
    s.reduce((acc, a) => (a.length > acc.length ? a : acc), '');

  const solve = (
    a: number,
    b: number,
    c: number,
    memo: { [index: string]: string[] } = {}
  ): string[] => {
    if (`${a},${b},${c}` in memo) return memo[`${a},${b},${c}`];
    if (a <= 0 && b <= 0 && c <= 0) return ['', '', '', '', '', ''];

    const sa = a > 0 ? solve(a - 1, b, c, memo) : ['', '', '', '', '', ''];
    const sb = b > 0 ? solve(a, b - 1, c, memo) : ['', '', '', '', '', ''];
    const sc = c > 0 ? solve(a, b, c - 1, memo) : ['', '', '', '', '', ''];

    const state = [
      (a > 0 ? 'a' : '') + max([sa[1], sa[2], sa[4], sa[5]]),
      (b > 0 ? 'b' : '') + max([sb[0], sb[2], sb[3], sb[5]]),
      (c > 0 ? 'c' : '') + max([sc[0], sc[1], sc[3], sc[4]]),
      (a > 0 ? 'a' : '') + sa[0],
      (b > 0 ? 'b' : '') + sb[1],
      (c > 0 ? 'c' : '') + sc[2],
    ];
    memo[`${a},${b},${c}`] = state;
    return state;
  };

  return max(solve(a, b, c));
}
// console.log(longestDiverseString(1, 1, 7));
// console.log(longestDiverseString(2, 2, 1));
// console.log(longestDiverseString(7, 1, 0));
console.log(longestDiverseString(100, 100, 100));
