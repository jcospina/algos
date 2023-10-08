import { Queue } from '../data structures/queue';
import { BinaryNode } from './types';

function bfs(tree: BinaryNode<number>, needle: number): boolean {
    const q = new Queue<BinaryNode<number>>();
    q.enqueue(tree);
    while(q.lenght) {
        const next = q.deque() as BinaryNode<number>;
        // search
        if (next.value === needle) {
            return true;
        }
        if (next.left) {
            q.enqueue(next.left);
        }
        if (next.right) {
            q.enqueue(next.right);        
        }        
    }
    return false;
}

const tree: BinaryNode<number> = {
    value: 7,
    left: {
        value: 10,
        left: {
            value: 11
        },
        right: {
            value: 12
        }
    },
    right: {
        value: 23,
        left: {
            value: 6,
            left: {
                value: 7
            }
        },
        right: {
            value: 4
        }
    }
}

console.log(bfs(tree, 4))