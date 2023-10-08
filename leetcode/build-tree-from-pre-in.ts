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


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {   
    if (preorder.length === 0) {
        return null;
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0]);
    }
    const rootNode = new TreeNode(preorder[0]);
    const rootIndex = inorder.indexOf(rootNode.val);
    rootNode.left = buildTree(preorder.slice(1, rootIndex+1), inorder.slice(0,rootIndex));
    rootNode.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
    return rootNode;
};



console.log(buildTree([2,3,4,5,6,7,8], [4,3,2,5,7,6,8]));