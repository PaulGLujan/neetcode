import { describe, it, expect } from 'vitest';
import { LinkedList } from '../src/DesignSinglyLinkedList';

describe('LinkedList', () => {
    it('should append one value', () => {
        const ll = new LinkedList();
        ll.insertTail(1);
        const values = ll.getValues();
        expect(values).toEqual([1]);
    });
    it('should be able to append nodes at the tail and list them', () => {
        const ll = new LinkedList();
        ll.insertTail(1);
        ll.insertTail(2);
        ll.insertTail(3);
        const values = ll.getValues();
        expect(values).toEqual([1, 2, 3])
    });
    it('should get index in middle of LL', () => {
        const ll = new LinkedList();
        ll.insertTail(1);
        ll.insertTail(2);
        ll.insertTail(3);
        const secondVal = ll.get(1);
        expect(secondVal).toBe(2);
    });
    it('should apply new value to head', () => {
        const ll = new LinkedList();
        ll.insertTail(1);
        ll.insertTail(2);
        ll.insertTail(3);
        ll.insertHead(49);
        ll.insertHead(48);
        const values = ll.getValues();
        expect(values).toEqual([48, 49, 1, 2, 3])
    });

    it('removes a node', () => {
        const ll = new LinkedList();
        ll.insertTail(1);
        ll.insertTail(2);
        ll.insertTail(3);
        ll.insertHead(49);
        ll.insertHead(48);
        ll.remove(2);
        const values = ll.getValues();
        expect(values).toEqual([48, 49, 2, 3])
    });
});