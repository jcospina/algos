import { TreeNode } from '../types/types';

// implement in-order traversal
class BSTIterator {
    private pointer: number;
    private inorder: number[];
    constructor(root: TreeNode | null) {
        this.pointer = -1;
        this.inorder = [];
        this.traverse(root, this.inorder);
    }

    next(): number {
        this.pointer++;
        return this.inorder[this.pointer];
    }

    hasNext(): boolean {
        return this.pointer < this.inorder.length - 1;
    }

    private traverse(node: TreeNode | null, path: number[]) {
        if (!node) {
            return;
        }
        this.traverse(node.left, path);
        path.push(node.val);
        this.traverse(node.right, path);
    }
}

const n7 = new TreeNode(7);
const n3 = new TreeNode(3);
const n15 = new TreeNode(15);
const n9 = new TreeNode(9);
const n20 = new TreeNode(20);

n7.left = n3;
n7.right = n15;
n15.left = n9;
n15.right = n20;

console.log('-------------');
const bstIterator = new BSTIterator(n7);
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');
console.log(bstIterator.next());
console.log(bstIterator.hasNext());
console.log('-------------');

