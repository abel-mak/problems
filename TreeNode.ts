// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const arrayToTree = (array: Array<number | null>): TreeNode | null => {
  if (array.length === 0 || array[0] === null) return null;
  const root = new TreeNode();
  const queue = [root];
  root.val = array[0];
  for (let i = 1; i < array.length; i++) {
    const rootP = queue.shift() as TreeNode;
    const leftVal = array[i];
    const rightVal = array[i + 1];

    if (leftVal !== null) {
      rootP.left = new TreeNode(leftVal);
      queue.push(rootP.left);
    } else rootP.left = null;

    if (rightVal !== null) {
      rootP.right = new TreeNode(rightVal);
      queue.push(rootP.right);
    } else rootP.right = null;

    i++;
  }
  return root;
};

// console.log(arrayToTree([0, 1, 2, 5, 7, 4, 6]));
// console.log(arrayToTree([]));
// console.log(arrayToTree([0, 1, null, 5, 7]));
// console.log(arrayToTree([0, null, 2, 5, 7]));
