function dayOfYear(date: string): number {
  const [year, month, day] = date.split('-');

  const numOfDays = {
    '0': 0,
    '1': 31,
    '2': 28 + 31,
    '3': 31 + 28 + 31,
    '4': 30 + 31 + 28 + 31,
    '5': 31 + 30 + 31 + 28 + 31,
    '6': 30 + 31 + 30 + 31 + 28 + 31,
    '7': 31 + 30 + 31 + 30 + 31 + 28 + 31,
    '8': 31 + 31 + 30 + 31 + 30 + 31 + 28 + 31,
    '9': 30 + 31 + 31 + 30 + 31 + 30 + 31 + 28 + 31,
    '10': 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 28 + 31,
    '11': 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 28 + 31,
    '12': 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 28 + 31,
  };
  if (Number(year) % 100 === 0) {
    if (Number(year) % 400 === 0) numOfDays['2'] = 29 + 31;
  } else {
    if (Number(year) % 4 === 0) numOfDays['2'] = 29 + 31;
  }

  const result = numOfDays[Number(month) - 1] + Number(day);
  return result;
}

console.log(dayOfYear('2004-03-01'));
