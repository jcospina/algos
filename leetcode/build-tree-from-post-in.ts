import { TreeNode } from '../types/types';

function buildTreePostIn(inorder: number[], postorder: number[]): TreeNode | null {   
    if (postorder.length === 0) {
        return null;
    }
    if (postorder.length === 1) {
        return new TreeNode(postorder[0]);
    }
    const rootNode = new TreeNode(postorder[postorder.length - 1]);
    const rootIndex = inorder.indexOf(rootNode.val);
    rootNode.left = buildTreePostIn(inorder.slice(0,rootIndex), postorder.slice(0, rootIndex));
    rootNode.right = buildTreePostIn(inorder.slice(rootIndex + 1), postorder.slice(rootIndex, postorder.length - 1));
    return rootNode;
};



console.log(buildTreePostIn([4,3,2,5,7,6,8], [4,3,7,8,6,5,2]));