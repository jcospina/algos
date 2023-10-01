import { ListNode } from './types';

class Stack<T> {
    length: number;
    private head?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node: ListNode<T> = {
            value: item 
        };
        if (!this.head) {
            this.head = node;
            return;        
        }
        node.next = this.head;
        this.head = node;
        return;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
 }