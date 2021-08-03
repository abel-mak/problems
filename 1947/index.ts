function maxCompatibilitySum(
  students: number[][],
  mentors: number[][]
): number {
  const m = students.length;
  const n = students[0]?.length;
  const calScore = (students: number[][], mentors: number[][]): number[][] => {
    const scores: number[][] = Array(m)
      .fill(0)
      .map(() => Array(m).fill(0));
    for (let studentIndex = 0; studentIndex < m; studentIndex++) {
      for (let mentorIndex = 0; mentorIndex < m; mentorIndex++) {
        for (let scoreIndex = 0; scoreIndex < n; scoreIndex++) {
          scores[studentIndex][mentorIndex] += Number(
            !(
              students[studentIndex][scoreIndex] ^
              mentors[mentorIndex][scoreIndex]
            )
          );
        }
      }
    }
    return scores;
  };

  const scores = calScore(students, mentors);

  const bestScore = (
    studentIndex: number,
    filter: { [index: number]: boolean } = {}
  ): number => {
    if (studentIndex < 0) return 0;
    let maxScore: number = 0;
    for (let mentorIndex = 0; mentorIndex < m; mentorIndex++) {
      if (filter[mentorIndex] === true) continue;
      const temp =
        bestScore(studentIndex - 1, { ...filter, [mentorIndex]: true }) +
        scores[studentIndex][mentorIndex];
      if (temp > maxScore) maxScore = temp;
    }

    return maxScore;
  };
  return bestScore(m - 1);
}
console.log(
  maxCompatibilitySum(
    [
      [0, 0],
      [0, 0],
      [0, 0],
    ],
    [
      [1, 1],
      [1, 1],
      [1, 1],
    ]
  )
);
