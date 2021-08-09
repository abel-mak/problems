import { TreeNode, arrayToTree } from '../TreeNode';
function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  const dfs = (root: TreeNode | null, ans: number[] = []): number[] => {
    if (root === null) return [];
    dfs(root.left, ans);
    ans.push(root.val);
    dfs(root.right, ans);
    return ans;
  };

  const list = [...dfs(root1), ...dfs(root2)];

  return list.sort();
}

let root1 = [2, 1, 4];
let root2 = [1, 0, 3];
console.log(getAllElements(arrayToTree(root1), arrayToTree(root2)));
