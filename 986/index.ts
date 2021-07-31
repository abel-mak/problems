function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  let firstP = 0;
  let secondP = 0;
  let result = [];

  while (firstP < firstList.length && secondP < secondList.length) {
    const low = Math.max(firstList[firstP][0], secondList[secondP][0]);
    const high = Math.min(firstList[firstP][1], secondList[secondP][1]);
    if (low <= high) result.push(low, high);

    if (firstList[firstP][1] < secondList[secondP][1]) {
      firstP++;
    } else if (firstList[firstP][1] > secondList[secondP][1]) {
      secondP++;
    } else {
      firstP++;
      secondP++;
    }
  }

  return result;
}

const firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
const secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];
console.log(intervalIntersection(firstList, secondList));
