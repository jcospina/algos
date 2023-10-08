import { BinaryNode } from '../types/types';

function walk(node: BinaryNode<number> | undefined, path: number[]) {   
   if (!node) {
      return;
   }
   walk(node.left, path);
   walk(node.right, path);
   path.push(node.value);
 }
 
 function postOrderTraversal(tree: BinaryNode<number>): number[] {
    const path: number[] = []
    walk(tree, path);
    return path;
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

console.log(postOrderTraversal(tree));
