function slowestKey(releaseTimes: number[], keysPressed: string): string {
  const timesShifted = [...releaseTimes];
  timesShifted.pop();
  timesShifted.unshift(0);
  const keyDuration = Array(releaseTimes.length);
  for (let i in releaseTimes) {
    keyDuration[i] = releaseTimes[i] - timesShifted[i];
  }

  let maxT = 0;
  let maxWord = '';
  const getMaxIndex = (nums: number[]): number => {
    let index = 0;
    for (let i in nums) {
      if (nums[i] > maxT || (nums[i] === maxT && keysPressed[i] > maxWord)) {
        maxT = nums[i];
        maxWord = keysPressed[i];
        index = Number(i);
      }
    }
    return index;
  };

  return keysPressed[getMaxIndex(keyDuration)];
}

let releaseTimes = [9, 29, 49, 50];
let keysPressed = 'cbcd';

console.log(slowestKey(releaseTimes, keysPressed));

releaseTimes = [1, 2];
keysPressed = 'ba';

console.log(slowestKey(releaseTimes, keysPressed));

releaseTimes = [12, 23, 36, 46, 62];
keysPressed = 'spuda';

console.log(slowestKey(releaseTimes, keysPressed));
