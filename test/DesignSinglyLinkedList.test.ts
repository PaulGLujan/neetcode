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
    it('does it all!', () => {
        const ll = new LinkedList();
        ll.insertHead(1);
        ll.insertTail(2);
        ll.insertHead(0);
        ll.remove(1);
        const values = ll.getValues();
        expect(values).toEqual([0, 2]);
    });
    it('inserts and removes head', () => {
        const ll = new LinkedList();
        ll.insertHead(1);
        const resp = ll.remove(0);
        expect(resp).toBe(true);
        const values = ll.getValues();
        expect(values).toEqual([]);
    });
    it('removes from tail', () => {
        const ll = new LinkedList();
        ll.insertTail(1);
        ll.insertTail(2);
        expect(ll.get(1)).toBe(2)
        ll.remove(1);
        ll.insertTail(2);
        expect(ll.get(1)).toBe(2);
        expect(ll.get(0)).toBe(1);
    });
    it('tries to remove 0th value from empty list', () => {
        const ll = new LinkedList();

        expect(ll.remove(0)).toBe(false);
    });

    it('tries to remove values out of range', () => {
        const ll = new LinkedList();
        ll.insertHead(1);
        expect(ll.remove(1)).toBe(false)
        expect(ll.remove(2)).toBe(false);
    });
});

describe('LinkedList Edge Cases', () => {
    it('removes the only node in the list', () => {
        const ll = new LinkedList();
        ll.insertHead(1);
        const resp = ll.remove(0);
        expect(resp).toBe(true);
        expect(ll.getValues()).toEqual([]);
        expect(ll.get(0)).toBe(-1); // Ensure the list is empty
    });

    it('handles out-of-bounds index for get', () => {
        const ll = new LinkedList();
        ll.insertHead(1);
        expect(ll.get(1)).toBe(-1); // Index greater than length
        expect(ll.get(-1)).toBe(-1); // Negative index
    });

    it('handles out-of-bounds index for remove', () => {
        const ll = new LinkedList();
        ll.insertHead(1);
        expect(ll.remove(1)).toBe(false); // Index greater than length
        expect(ll.remove(-1)).toBe(false); // Negative index
    });

    it('removes all nodes one by one', () => {
        const ll = new LinkedList();
        ll.insertTail(1);
        ll.insertTail(2);
        ll.insertTail(3);
        expect(ll.remove(0)).toBe(true);
        expect(ll.getValues()).toEqual([2, 3]);
        expect(ll.remove(0)).toBe(true);
        expect(ll.getValues()).toEqual([3]);
        expect(ll.remove(0)).toBe(true);
        expect(ll.getValues()).toEqual([]);
        expect(ll.remove(0)).toBe(false); // List is now empty
    });

    it('handles empty list for getValues', () => {
        const ll = new LinkedList();
        expect(ll.getValues()).toEqual([]); // Should return an empty array
    });

    it('handles circular references (if any)', () => {
        const ll = new LinkedList();
        const node1 = new LinkedList();
        const node2 = new LinkedList();
        // Simulate a circular reference
        node1.insertTail(node2);
        node2.insertTail(node1);
        expect(ll.getValues()).toThrowError();
    });
});
