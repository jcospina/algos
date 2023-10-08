class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    } 
    function compareBinaryTree(source: TreeNode | null, target: TreeNode | null) {
        const sourceValue = source && source.val;
        const targetValue = target && target.val;
        console
        if (!source || !target) {
            return sourceValue === targetValue;
        }
        if (source && target && sourceValue !== targetValue) {
            return false;
        }
    
        return compareBinaryTree(source.left, target.right) 
            && compareBinaryTree(source.right, target.left);
    }
    return compareBinaryTree(root.left, root.right);
};