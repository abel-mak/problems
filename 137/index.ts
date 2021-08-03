function singleNumber(nums: number[]): number {
  const hashSet: {
    [index: number]: boolean;
  } = {};

  for (let num of nums) {
    if (!hashSet[num])
      hashSet[num] = true;
    else
      hashSet[num] = false;
  }

  return Number(Object.keys(hashSet).find(key => hashSet[key]));
}
