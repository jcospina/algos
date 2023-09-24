import { BinaryNode } from './types';

function dfs(node: BinaryNode<number>, needle: number): boolean {
    const stack = [] as BinaryNode<number>[];
    stack.push(node);
    while (stack.length) {
        const current = stack.pop();
        if (current && current.value === needle) {
            return true;
        }
        if (current && current.left) {
            stack.push(current.left);
        }
        if (current && current.right) {
            stack.push(current.right)
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

console.log(dfs(tree, 90))