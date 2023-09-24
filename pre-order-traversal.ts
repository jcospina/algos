import { BinaryNode } from './types';

function walk(node: BinaryNode<number> | undefined, path: number[]) {
    if (!node) {
        return;
    }
    path.push(node.value);
    walk(node.left, path);
    walk(node.right, path);
}
 
function preOrderTraversal(tree: BinaryNode<number>): number[] {
    const path: number[] = []
    walk(tree, path);
    return path;
}