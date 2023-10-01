import { BinaryNode } from './types';

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