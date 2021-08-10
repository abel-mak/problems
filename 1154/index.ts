function dayOfYear(date: string): number {
  const [year, month, day] = date.split('-');

  const numOfDays: { [index: number]: number } = {
    '0': 0,
    '1': 31,
    '2': 28,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
  };

  if (Number(year) % 100 === 0) {
    if (Number(year) % 400 === 0) numOfDays[2] = 29;
  } else {
    if (Number(year) % 4 === 0) numOfDays[2] = 29;
  }

  let result = 0;
  for (let i = 0; i < Number(month); i++) {
    result += numOfDays[i];
  }
  return result + Number(day);
}

console.log(dayOfYear('2004-03-01'));
