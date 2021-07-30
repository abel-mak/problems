// Definition for a binary tree node.
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

class FindElements {
  recovered: TreeNode | null;

  constructor(root: TreeNode | null) {
    const recoverTree = (root: TreeNode | null): TreeNode | null => {
      if (root.left !== null) {
        root.left.val = 2 * root.val + 1;
        root.left = recoverTree(root.left);
      }
      if (root.right !== null) {
        root.right.val = 2 * root.val + 2;
        root.right = recoverTree(root.right);
      }
      return root;
    };
    root.val = 0;
    this.recovered = recoverTree(root);
  }

  find(target: number): boolean {
    const isFound = (root: TreeNode | null, target: number): boolean => {
      if (root === null) return false;
      if (root.val === target) return true;
      return isFound(root.left, target) || isFound(root.right, target);
    };
    return isFound(this.recovered, target);
  }
}
/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
