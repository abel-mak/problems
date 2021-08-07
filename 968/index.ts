/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minCameraCover(root: TreeNode | null): number {
  const solve = (root: TreeNode | null): number[] => {
    if (root === null) return [Number.MAX_VALUE, Number.MAX_VALUE, 0];
    const L = solve(root.left);
    const R = solve(root.right);

    const s0 = L[2] + R[2];
    const s1 = Math.min(
      L[0] + R[0],
      L[0] + R[1],
      L[0] + R[2],
      L[1] + R[0],
      L[1] + R[1],
      L[1] + R[2],
      L[2] + R[0],
      L[2] + R[1],
      L[2] + R[2]
    );
    const s2 = Math.min(
      L[1] + R[0],
      L[1] + R[1],
      L[1] + R[2],
      L[2] + R[0],
      L[2] + R[1],
      L[2] + R[2]
    );

    return [s0, s1, s2];
  };

  const [s0, s1, s2] = solve(root);
  return Math.min(s1, s2);
}
