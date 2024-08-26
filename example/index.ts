import { Enumify } from '../src';

const fruit = new Enumify<string>({
  APPLE: {
    key: 'APPLE',
    label: '🍎',
    value: '1',
  },
});
fruit.add('BANNER', '🍌', '2');

console.log(fruit.get("APPLE"));
console.log(fruit.getLabel('APPLE'));
console.log(fruit.getValue('APPLE'));
console.log(fruit.getAll());

fruit.remove("APPLE")

console.log(fruit.get('APPLE'));
console.log(fruit.getLabel('APPLE'));
console.log(fruit.getValue('APPLE'));
console.log(fruit.getAll());