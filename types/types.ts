 export type BinaryNode<T> = {
    value: T;
    left?: BinaryNode<T>;
    right?: BinaryNode<T>;
 }

 export interface ListNode<T> {
    value: T;
    next?: ListNode<T>;
}

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export class NextTreeNode {
    val: number
    left: NextTreeNode | null
    right: NextTreeNode | null
    next: NextTreeNode | null
    constructor(val?: number, left?: NextTreeNode, right?: NextTreeNode, next?: NextTreeNode) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}