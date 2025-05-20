class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, nextNode: ListNode | null = null) {
        this.val = val;
        this.next = nextNode;
    }
}

export class LinkedList {
    private head: ListNode | null;
    private tail: ListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    get(index: number): number {
        const node = this.getNode(index);

        if (node) {
            return node.val;
        }

        return -1;
    }

    getNode(index: number): ListNode | null {
        if (index < 0) {
            return null;
        }

        let current = this.head;
        let i = 0;

        while (current) {
            if (i === index) {
                return current;
            }

            current = current.next;
            i++;
        }

        return null
    }

    insertHead(val: number) {
        const newHead = new ListNode(val, this.head);
        this.head = newHead;

        if (!this.tail) {
            this.tail = this.head;
        }
    }

    insertTail(val: number) {
        if (!this.head) {
            this.head = new ListNode(val);
            this.tail = this.head;
            return
        }

        this.tail!.next = new ListNode(val);
        this.tail = this.tail!.next;
    }

    remove(index: number): boolean {
        if (!this.head) {
            return false;
        }

        const prevNode = this.getNode(index - 1);

        if (!prevNode) {
            if (!this.getNode(index)) {
                return false;
            }

            this.head = null;
            return true;
        }

        if (!prevNode.next) {
            return false
        }

        if (prevNode.next === this.tail) {
            this.tail = prevNode;
            prevNode.next = null;
            return true;
        }

        prevNode.next = prevNode.next.next;
        return true;
    }

    getValues(): number[] {
        const values: number[] = [];

        let current = this.head;
        while (current) {
            values.push(current.val);
            current = current.next;
        }

        return values;
    }
}
