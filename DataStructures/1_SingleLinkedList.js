class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return current
    }

    shift() {
        if (!this.head) return undefined;

        const temp = this.head;
        this.head = temp.next;
        this.length--;

        if (!this.length) { this.tail = null; }

        return temp;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;

    }

    get(index) {
        if (index < 0 || index >= this.length) { return null };

        let i = 0;
        let current = this.head;

        while (i !== index) {
            current = current.next;
            i++;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true
        } else {
            return false
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) {
            this.push(val)
            return true
            // return !!this.push(val)
        }

        if (index === 0) {
            this.unshift(val)
            return true
        }

        const newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;

        this.length++;
        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;

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
            //6.3 Set prev to be the value of the node variable
            prev = curr;
            //6.4 Set the node variable to be the value of the next variable
            curr = next;
        }
        // 7. Return list
        return this;
    }
}

const list = new SinglyLinkedList();
list.push(1)
list.push(2)
list.push(3)
