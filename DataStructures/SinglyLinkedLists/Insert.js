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

}

const list = new SinglyLinkedList();
list.push(1)
list.push(2)
list.push(3)
console.log(list.insert(1, 10))
console.log(list)
