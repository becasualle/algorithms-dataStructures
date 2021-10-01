class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;

        const temp = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;

        return temp;
    }
    shift() {
        if (!this.head) return undefined;

        const temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let counter = 0;
        let current;
        if (idx <= this.length / 2) {
            current = this.head;
            while (counter < idx) {
                current = current.next;
                counter++;
            }
        } else {
            current = this.tail;
            counter = this.length - 1;
            while (counter > idx) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(idx, val) {
        let current = this.get(idx);
        if (current) {
            current.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val); //!! we don't won't to return Node, instead we need boolean
        if (idx === this.length) return !!this.push(val);

        const current = this.get(idx);
        const previous = current.prev;
        const newNode = new Node(val);

        current.prev = newNode, newNode.next = current;
        newNode.prev = previous, previous.next = newNode;

        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        const removed = this.get(idx);
        const before = removed.prev;
        const after = removed.next;

        before.next = after, after.prev = before;
        removed.next = null, removed.prev = null;

        this.length--;
        return removed;
    }
    reverse() {
        // 1. Create a variable called node ant initialize it to the head property
        let curr = this.head;
        // 2. Set head property to become tail
        this.head = this.tail;
        // 3. Set tail property to become node (which stores head property)
        this.tail = curr;
        // 4. Create variable called prev and set it to null
        let prev = null;
        // 5. Create variable called next 
        let next;
        // 6. loop through the list
        for (let i = 0; i < this.length; i++) {
            //6.1 Set next to be the next property on whatever node is
            next = curr.next;
            //6.2 Set the next property on the node to be whatever prev is
            curr.next = prev;
            curr.prev = next;
            //6.3 Set prev to be the value of the node variable
            prev = curr;
            //6.4 Set the node variable to be the value of the next variable
            curr = next;
        }
        // 7. Return list
        return this;
    }
}

const list = new DoublyLinkedList();
