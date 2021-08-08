function rearrangeSticks(
  n: number,
  k: number,
  memo: { [index: string]: number } = {}
): number {
  if (n < k || (n !== 0 && k === 0)) return 0;
  if ((n === 2 && k === 2) || (n === 2 && k === 1)) return 1;
  if (`${n},${k}` in memo) return memo[`${n},${k}`];

  memo[`${n},${k}`] =
    rearrangeSticks(n - 1, k - 1, memo) +
    rearrangeSticks(n - 1, k, memo) * (n - 1);
  return memo[`${n},${k}`] % (10 ** 9 + 7);
}

console.log(rearrangeSticks(20, 11));
