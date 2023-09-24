type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

function createNode<V>(value: V): Node<V> {
    return {value}
}
// least recently used data structure
// used for caching (certain capacity)
// the most recently used item is the first item
// the least recently used iten is the last item
export class LRU<K,V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;

    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    } 

    update(key: K, value: V): void {
        // does it exists?
        let node = this.lookup.get(key);
        if (!node) { // create node and update front of the list
            node = createNode(value);
            this.length++;
            this.prepend(node);
            this.trimCache();
            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
        } else { // update from of the list and update node value
            this.detach(node);
            this.prepend(node)
            node.value = value;
        }
    }

    get(key: K): V | undefined {
        // check the cache for existence
        const node = this.lookup.get(key);
        if (!node) {
            return undefined;
        }
        // update the value we found by moving it to the front
        // because value was accessed so it's the most recently used
        this.detach(node);
        this.prepend(node)
        // return the value found 
        return node.value;

    }

    // remove links
    private detach(node: Node<V>) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = this.head.next;
        }

        if (this.tail === node) {
            this.tail = this.tail.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    // add to front
    private prepend(node: Node<V>) {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }
        const tail = this.tail as Node<V>;
        this.detach(this.tail as Node<V>);

        const key = this.reverseLookup.get(tail) as K; // using the node we get the k
        this.lookup.delete(key); // delete from cache
        this.reverseLookup.delete(tail); // delete from cache
    }
}