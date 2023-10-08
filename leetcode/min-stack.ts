class MinStack {
    private innerStack: any[];
    constructor() {
        this.innerStack = [];
    }

    push(val: number): void {
        this.innerStack.push({
            value: val,
            min: this.innerStack.length === 0 ? val : Math.min(val, this.getMin())
        })
    }

    pop(): void {
        this.innerStack.pop();            
    }

    top(): number {
        return this.innerStack[this.innerStack.length - 1].value;
    }

    getMin(): number {
        return this.innerStack[this.innerStack.length - 1].min;
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
