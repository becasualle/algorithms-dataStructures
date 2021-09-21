

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

}

const list = new SinglyLinkedList();
list.push(1)
list.push(2)
list.push(3)
console.log(list.remove(1))
console.log(list)
