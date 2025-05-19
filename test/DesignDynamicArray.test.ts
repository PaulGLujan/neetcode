import { describe, it, expect } from 'vitest';
import { DynamicArray } from '../src/DesignDynamicArray';

describe('DynamicArray', () => {
    it('should initialize with the correct capacity and size', () => {
        const dynamicArray = new DynamicArray(4);
        expect(dynamicArray.getCapacity()).toBe(4);
        expect(dynamicArray.getSize()).toBe(0);
    });

    it('should allow pushing elements and increase size', () => {
        const dynamicArray = new DynamicArray(2);
        dynamicArray.pushback(10);
        dynamicArray.pushback(20);
        expect(dynamicArray.getSize()).toBe(2);
        expect(dynamicArray.get(0)).toBe(10);
        expect(dynamicArray.get(1)).toBe(20);
    });

    it('should resize when capacity is exceeded', () => {
        const dynamicArray = new DynamicArray(2);
        dynamicArray.pushback(10);
        dynamicArray.pushback(20);
        dynamicArray.pushback(30);
        expect(dynamicArray.getCapacity()).toBe(4);
        expect(dynamicArray.getSize()).toBe(3);
        expect(dynamicArray.get(2)).toBe(30);
    });

    it('should allow setting and getting elements', () => {
        const dynamicArray = new DynamicArray(3);
        dynamicArray.pushback(10);
        dynamicArray.pushback(20);
        dynamicArray.set(1, 50);
        expect(dynamicArray.get(1)).toBe(50);
    });

    it('should allow popping elements and decrease size', () => {
        const dynamicArray = new DynamicArray(3);
        dynamicArray.pushback(10);
        dynamicArray.pushback(20);
        const popped = dynamicArray.popback();
        expect(popped).toBe(20);
        expect(dynamicArray.getSize()).toBe(1);
    });

    it('should handle popping from an empty array gracefully', () => {
        const dynamicArray = new DynamicArray(3);
        const popped = dynamicArray.popback();
        expect(popped).toBe(0); // Default value in the array
        expect(dynamicArray.getSize()).toBe(0);
    });
});