class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BSTNode(value);
        if (!this.root) {
            this.root = newNode;
            return true;
        }
        let currNode = this.root;
        while(currNode) {
            if (currNode.value > value) {
                if (currNode.left) {
                    currNode = currNode.left;
                } else {
                    currNode.left = newNode;
                    break;
                }

            } else if (currNode.value < value) {
                if (currNode.right) {
                    currNode = currNode.right;
                } else {
                    currNode.right = newNode;
                    break;
                }                
            }            
        }

    }

    contains(value) {
        const stack = [this.root];
        while(stack.length) {
            const curr = stack.pop();
            if (curr.value === value) {
                return true;
            }
            if (curr.value > value && curr.left) {
                stack.push(curr.left);
            } else if (curr.value < value && curr.right) {
                stack.push(curr.right);
            }            
        }
        return false;
    }

    peek() {
        console.log(this.root);
    }
}

const bst = new BinarySearchTree();

bst.insert(6);
bst.insert(7);
bst.insert(1);
bst.insert(10);
bst.insert(2);
bst.insert(12);
bst.peek();
