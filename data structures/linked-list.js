  class LinkedList {
    constructor(value) {
        this.head = value ? {value, next: null} : null;
        this.tail = this.head;        
        this.length = value ? 1 : 0;
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
        this.length++;
    }

    /**
     * Deletes a node
     * @param {*} node - node to remove
     * @returns {*} - the deleted node's value
     */
    remove(node) {
        if (this.length === 0) {
            return null;
        }
        this.length--;
        if (this.isHead(node)) {
            this.head = node.next;
            node.next = null;            
            if (this.length === 0) {
                this.tail = null;
            }
            return node.value;
        }
        let prevNode = null;
        let currNode = this.head;
        while (currNode !== null) {
            if (currNode === node) {
                break;                
            }
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (currNode !== null) {        
            const nodeValue = currNode.value;
            if (this.isTail(currNode)) {
                this.tail = prevNode;
            }
            prevNode.next = currNode.next;
            currNode.next = null;            
            return nodeValue;            
        }
        return null;
    }

    /**
     * Delete the node at the end of the linked list
     * @return {*} - the removed value;
     */
    removeTail() {
        if (this.tail === null) {
            return null;
        }
        this.length--;
        const tailValue = this.tail.value;
        if (this.tail === this.head) {
            this.head = this.tail = null;
            return tailValue;
        }
        let lastNode = this.head;       
        while (lastNode.next !== this.tail) {
            lastNode = lastNode.next;
        } 
        lastNode.next = null;
        this.tail = lastNode;        
        return tailValue;
    }

    /**
     * checks if a node is the head of the linked list
     * @param {{value:number, next:Object|null}} node - the node to check
     * @return {boolean} - true if node is the head, otherwise false
     */
    isHead(node) {
        return node === this.head;
    }

    /**
     * checks if a node is the tail of the linked list
     * @param {{value:number, next:Object|null}} node - the node to check
     * @return {boolean} - true if node is the tail, otherwise false
     */
    isTail(node) {
        return node === this.tail;
    }    

    /**
     * Searches the linked list and returns true if it contains the value passed
     * @param {*} value - the value to search for
     * @return {boolean} - true if value is found otherwise false
     */
    contains(value) {
        let currNode = this.head;
        while(currNode !== null) {
            if (currNode.value === value) {
                return true;
            }            
            currNode = currNode.next;
        }
        return false;        
    }
}

const ll = new LinkedList();
ll.insert(2);
ll.insert(3);
ll.insert(5);
ll.insert(6);

let node = ll.head;
while (node) {    
    if (node.value === 6) {            
        ll.remove(node);
        break;
    }
    node = node.next
}
console.log(JSON.stringify(ll.head));

