import { describe, expect, it } from 'vitest';

import { Enumify } from '../src';

describe('Enumify', () => {
  it('should add a new enum item', () => {
    const enumInstance = new Enumify();
    enumInstance.add('APPLE', '苹果🍎', 1);

    const item = enumInstance.get('APPLE');
    expect(item).toEqual({ key: 'APPLE', label: '苹果🍎', value: 1 });
  });

  it('should not add an enum item with a duplicate key', () => {
    const enumInstance = new Enumify();
    enumInstance.add('APPLE', '苹果🍎', 1);
    enumInstance.add('APPLE', '香蕉🍌', 2);

    const item = enumInstance.get('APPLE');
    expect(item).toEqual({ key: 'APPLE', label: '苹果🍎', value: 1 }); // 确保没有被覆盖
  });

  it('should remove an existing enum item', () => {
    const enumInstance = new Enumify();
    enumInstance.add('APPLE', '苹果🍎', 1);
    enumInstance.remove('APPLE');

    const item = enumInstance.get('APPLE');
    expect(item).toBeUndefined(); // 确保项已被删除
  });

  it('should get all enum items', () => {
    const enumInstance = new Enumify();
    enumInstance.add('APPLE', '苹果🍎', 1);
    enumInstance.add('BANANA', '香蕉🍌', 2);

    const allItems = enumInstance.getAll();
    expect(allItems).toEqual([
      { key: 'APPLE', label: '苹果🍎', value: 1 },
      { key: 'BANANA', label: '香蕉🍌', value: 2 },
    ]);
  });

  it('should get the correct label by key', () => {
    const enumInstance = new Enumify();
    enumInstance.add('APPLE', '苹果🍎', 1);

    const label = enumInstance.getLabel('APPLE');
    expect(label).toBe('苹果🍎');
  });

  it('should get the correct value by key', () => {
    const enumInstance = new Enumify();
    enumInstance.add('APPLE', '苹果🍎', 1);

    const value = enumInstance.getValue('APPLE');
    expect(value).toBe(1);
  });

  it('should initialize with default values', () => {
    const defaultValues = {
      PINEAPPLE: { key: 'PINEAPPLE', label: '菠萝🍍', value: 3 },
    };
    const enumInstance = new Enumify(defaultValues);

    const item = enumInstance.get('PINEAPPLE');
    expect(item).toEqual({ key: 'PINEAPPLE', label: '菠萝🍍', value: 3 });
  });

  it('should not remove a non-existing enum item', () => {
    const enumInstance = new Enumify();
    expect(() => enumInstance.remove('NON_EXISTING')).not.toThrow();
  });
});
