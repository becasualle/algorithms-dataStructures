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
}

const list = new SinglyLinkedList();
list.push(1)
list.push(2)
list.push(3)
console.log(list.set(2, 'HELLO'))
console.log(list.tail)
