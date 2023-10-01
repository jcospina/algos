// The root node must be the minimun value
// a heap has no holes/gaps and it's filled from left to right
export class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length);
        this.length = this.data.length;
    }

    pop(): number | null { // get min value (root node)
        if (this.length === 0) {
            return null;
        }
        console.log('data before first swap: ', this.data)
        console.log('length before first swap: ', this.length)
        // get root node value
        const min = this.data[0];
        // take last node and put it in the root node position
        this.data[0] = this.data[this.length - 1];
        this.data.pop();
        this.length = this.data.length;
        console.log('after first swap: ', this.data)
        console.log('length after first swap: ', this.length)
        // heapifyDown(0)
        this.heapifyDown(0);        
        return min;
    }
    
    peek(): number[] {
        return this.data;
    }

    private heapifyUp(index: number) {
        if (index === 0) {
            return;
        }
        const parentIndex = this.parentIndex(index);
        const parentValue = this.data[parentIndex];
        const value = this.data[index];
        // swap because parent must be less than children
        // in a min heap
        if (parentValue > value) {
            this.data[parentIndex] = value;
            this.data[index] = parentValue;
            this.heapifyUp(parentIndex);
        }

    }

    private heapifyDown(index: number) {
        const leftChildIndex = this.leftChildIndex(index);
        const rightChildIndex = this.rightChildIndex(index);
        if (index >= this.length || leftChildIndex >= this.length) {
            return;
        }
        const leftChildValue = this.data[leftChildIndex];
        const rightChildValue = this.data[rightChildIndex];
        const value = this.data[index];
        // compare with childs

        if (leftChildValue > rightChildValue && value > rightChildValue) {
            this.data[rightChildIndex] = value;
            this.data[index] = rightChildValue;
            this.heapifyDown(rightChildIndex);
        } else if ((!rightChildValue && value > leftChildValue) || (rightChildValue > leftChildValue && value > leftChildValue)) {
            this.data[leftChildIndex] = value;
            this.data[index] = leftChildValue;
            this.heapifyDown(leftChildIndex);
        }        
    }

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }
    
    private leftChildIndex(index: number): number {
        return (index * 2) + 1;
    }

    private rightChildIndex(index: number): number {
        return (index * 2) + 2;
    }
}

const heap = new MinHeap();

heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(31);
heap.insert(24);
heap.insert(50);
heap.insert(3);
console.log(heap.pop()); // 3
console.log(heap.peek());