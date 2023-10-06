import { ListNode } from '../study/types';

export class Queue<T> {
    lenght: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
      this.head = this.tail = undefined;
      this.lenght = 0;
    }

    enqueue(item: T) {
        this.lenght++;
        if (!this.tail) {
            this.head = this.createNode(item);
            this.tail = this.head;
            return;
        }
        const newNode = this.createNode(item);
        this.tail.next = newNode;
        this.tail = newNode;        
    }

    deque() : T | null {
        if (!this.head) {
            return null;
        }
        this.lenght--;
        const value = this.head.value;
        this.head = this.head.next;
        if (this.lenght === 0) {
            this.tail = undefined;
        }
        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    private createNode(item:T): ListNode<T> {
        return  {
            value: item
        };
    }
}

// const myQ = new Queue();

// myQ.enqueue(1)
// myQ.enqueue(2)
// myQ.enqueue(3)
// console.log(myQ.deque())
// console.log(myQ.deque())
// console.log(myQ.deque())