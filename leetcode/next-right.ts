import { NextTreeNode } from '../types/types';

function connect(root: NextTreeNode | null): NextTreeNode | null {
    if (!root) {
        return null;
    }
    const q = [root];
    let pointer = 0;
    while (pointer < q.length) {
        const levelSize = q.length - pointer;
        for (let i = 0; i < levelSize; i++) {
            const dq = q[pointer];
            if (i === levelSize - 1) {
                dq.next = null;
            } else {
                dq.next = q[pointer+1] ? q[pointer+1] : null;
            }            
            pointer++;
            if (dq.left) {
                q.push(dq.left);
            }
            if (dq.right) {
                q.push(dq.right);
            }
        }
    }
    return root;    
};

const one = new NextTreeNode(1);
const two = new NextTreeNode(2);
const three = new NextTreeNode(3);
const four = new NextTreeNode(4);
const five = new NextTreeNode(5);
const seven = new NextTreeNode(7);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = seven;

console.log(connect(one));

