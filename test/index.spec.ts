import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Enumify } from '../src';

describe('Enumify', () => {
  let enumify: Enumify<number>;

  beforeEach(() => {
    enumify = new Enumify<number>();
  });

  it('should initialize with an empty values object by default', () => {
    const emptyEnumify = new Enumify<number>();
    expect(emptyEnumify.getAll()).toEqual([]);
  });

  it('should initialize with provided default values', () => {
    const defaultValues = {
      APPLE: { key: 'APPLE', label: '🍎', value: 1 },
      PINEAPPLE: { key: 'PINEAPPLE', label: '🍍', value: 3 },
    };
    const enumifyWithDefaults = new Enumify<number>(defaultValues);
    expect(enumifyWithDefaults.getAll()).toEqual([
      { key: 'APPLE', label: '🍎', value: 1 },
      { key: 'PINEAPPLE', label: '🍍', value: 3 },
    ]);
  });

  it('should add an enum item', () => {
    enumify.add('APPLE', '🍎', 1);
    const item = enumify.get('APPLE');
    expect(item).toEqual({ key: 'APPLE', label: '🍎', value: 1 });
  });

  it('should not add an enum item with a duplicate key', () => {
    enumify.add('APPLE', '🍎', 1);
    enumify.add('APPLE', '🍌', 2);
    const item = enumify.get('APPLE');
    expect(item).toEqual({ key: 'APPLE', label: '🍎', value: 1 });
  });

  it('should remove an enum item', () => {
    enumify.add('APPLE', '🍎', 1);
    enumify.remove('APPLE');
    const item = enumify.get('APPLE');
    expect(item).toBeUndefined();
  });

  it('should remove all enum item', () => {
    enumify.add('APPLE', '🍎', 1);
    enumify.add('PINEAPPLE', '🍍', 3);
    enumify.removeAll();
    const allItems = enumify.getAll();
    expect(allItems).toEqual([]);
  });

  it('should log an error when trying to remove a non-existent key', () => {
    const consoleSpy = vi.spyOn(console, 'error');
    enumify.remove('NON_EXISTENT_KEY');
    expect(consoleSpy).toHaveBeenCalledWith('Key "NON_EXISTENT_KEY" does not exist.');
    consoleSpy.mockRestore();
  });

  it('should return undefined for a non-existent enum item', () => {
    const item = enumify.get('PINEAPPLE');
    expect(item).toBeUndefined();
  });

  it('should get all enum items', () => {
    enumify.add('APPLE', '🍎', 1);
    enumify.add('PINEAPPLE', '🍍', 3);
    const allItems = enumify.getAll();
    expect(allItems).toEqual([
      { key: 'APPLE', label: '🍎', value: 1 },
      { key: 'PINEAPPLE', label: '🍍', value: 3 },
    ]);
  });

  it('should get label by key', () => {
    enumify.add('PINEAPPLE', '🍍', 3);
    const label = enumify.getLabel('PINEAPPLE');
    expect(label).toBe('🍍');
  });

  it('should get value by key', () => {
    enumify.add('PINEAPPLE', '🍍', 3);
    const value = enumify.getValue('PINEAPPLE');
    expect(value).toBe(3);
  });

  it('should return undefined for non-existent key when getting label', () => {
    const label = enumify.getLabel('NON_EXISTENT');
    expect(label).toBeUndefined();
  });

  it('should return undefined for non-existent key when getting value', () => {
    const value = enumify.getValue('NON_EXISTENT');
    expect(value).toBeUndefined();
  });
});
