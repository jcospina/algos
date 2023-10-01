import { BinaryNode } from './types';


function walk(node: BinaryNode<number> | undefined, path: number[]) {
   if (!node) {
      return;
   }
   walk(node.left, path);
   path.push(node.value);
   walk(node.right, path);
}
 
function inOrderTraversal(tree: BinaryNode<number>): number[] {
   const path: number[] = []
   walk(tree, path);
   return path;
}