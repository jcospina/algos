  class LinkedList {
    constructor(value) {
        this.head = value ? {value, next: null} : null;
        this.tail = this.head;        
    }

    /**
     * Inserts a new value to the end of the linked list
     * @param {*} value - node to insert
     */
    insert(value) {
        const newNode = {value, next: null}        
        if (this.tail !== null ) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
    }

    /**
     * Deletes a node
     * @param {*} value - node to remove
     */
    remove(value) {

    }

    /**
     * Delete the node at the end of the linked list
     * @returns {*} - the removed value;
     */
    removeTail() {
        if (this.tail === null) {
            return null;
        }
        const tailValue = this.tail.value;
        if (this.tail === this.head) {
            this.head = this.tail = null;
            return tailValue;
        }
        let lastNode = this.head;
        do {
            if (lastNode.next === this.tail) {
                this.lastNode.next = null;
                this.tail = lastNode;
                break;
            }
        } while(lastNode.next)        
        return tailValue;
    }

    isHead() {

    }

    isTail() {

    }    

    contains() {
        
    }
}

const ll = new LinkedList();
console.log(ll.head);

ll.insert(2);
console.log(ll.head);

ll.insert(3);
console.log(ll.head);

ll.insert(5);
console.log(ll.head);

ll.removeTail();
console.log(ll.tail);