class RandomizedSet {
    private data: Map<number,{value: number, index: number}>;
    private randomLookup: number[];
    private length: number;  
    constructor() {
        this.data = new Map<number, {value: number, index: number}>();
        this.randomLookup = [];
        this.length = 0;
    }

    insert(val: number): boolean {
        const valueToAdd = this.data.get(val);
        if (!valueToAdd) {            
            this.data.set(val, {value: val, index: this.length});
            this.randomLookup.push(val);
            this.length++;
            return true;
        }
        return false;
    }

    remove(val: number): boolean {
        if (this.data.get(val)) {
            const index = this.data.get(val)!.index;
            this.moveToGap(this.length - 1, index);
            this.data.delete(val);
            this.length--;
            return true;
        }
        return false;
    }

    getRandom(): number {
        const random = Math.floor(Math.random() * this.length); // length = 3, random = 0,1,2        
        return this.randomLookup[random];
    }

    peek() {
        console.log('Data: ');
        console.log(this.data);
        console.log('Lookup: ');
        console.log(this.randomLookup);
    }

    private moveToGap(source: number, gap: number) {
        const lastAdded = this.randomLookup[source];
        this.randomLookup[gap] = this.randomLookup[source];
        this.randomLookup.pop();
        this.data.set(lastAdded, {value: lastAdded, index: gap});
    } 
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
const randomizedSet = new RandomizedSet();
console.log('inserting') 
console.log(randomizedSet.insert(-1));
randomizedSet.peek();
console.log('removing') 
console.log(randomizedSet.remove(-2));
randomizedSet.peek();
console.log('inserting') 
console.log(randomizedSet.insert(-2));
randomizedSet.peek();
console.log('get random')
console.log(randomizedSet.getRandom());
console.log('removing') 
console.log(randomizedSet.remove(-1));
randomizedSet.peek();
console.log('inserting') 
console.log(randomizedSet.insert(-2));
randomizedSet.peek();
console.log('get random')
console.log(randomizedSet.getRandom());