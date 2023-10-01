 export type BinaryNode<T> = {
    value: T;
    left?: BinaryNode<T>;
    right?: BinaryNode<T>;
 }

 export interface ListNode<T> {
    value: T;
    next?: ListNode<T>;
}