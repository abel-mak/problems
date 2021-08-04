function convertToBase7(num: number): string {
  let x = Math.abs(num);
  let result = '';
  while (x >= 7) {
    result = String(x % 7) + result;
    x = Math.floor(x / 7);
  }

  result = String(x) + result;
  if (num < 0) return '-' + result;
  return result;
}

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
