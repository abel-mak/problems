function isHappy(n: number): boolean {
  let nString = n.toString();
  const hashSet: { [index: string]: boolean } = {};

  while (!(nString in hashSet)) {
    hashSet[nString] = true;
    let sum = 0;
    console.log(nString);
    nString = String(
      nString.split('').reduce((s, n) => (s += Number(n) ** 2), 0)
    );
  }

  if (nString === '1') return true;
  return false;
}

console.log(isHappy(8));
