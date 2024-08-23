# js-enum-lib

[![npm package][npm-img]][npm-url] [![Build Status][build-img]][build-url] [![Downloads][downloads-img]][downloads-url] [![Issues][issues-img]][issues-url] [![Code Coverage][codecov-img]][codecov-url] [![Commitizen Friendly][commitizen-img]][commitizen-url] [![Semantic Release][semantic-release-img]][semantic-release-url]

## Install

```bash
npm install js-enum-lib
```

## Usage

```ts
import { Enumify } from 'js-enum-lib';

const colorEnum = new Enumify({
  PINEAPPLE: { key: 'PINEAPPLE', label: '菠萝🍍', value: 3 },
});

colorEnum.add('RED', 'Red Color', '#FF0000');
colorEnum.add('GREEN', 'Green Color', '#00FF00');

console.log(colorEnum.getAll()); // 获取所有枚举项
console.log(colorEnum.get('RED')); // 获取指定的枚举项
console.log(colorEnum.getLabel('GREEN')); // 获取标签
console.log(colorEnum.getValue('RED')); // 获取值

colorEnum.remove('RED'); // 删除枚举项
console.log(colorEnum.getAll()); // 查看删除后的结果
```


# Enumify

`Enumify` 是一个用于管理自定义枚举的类。你可以用它来添加、删除和获取枚举项及其属性。

## 使用方法

### 创建实例

```typescript
const enumify = new Enumify();
```


### 添加枚举项

```typescript
enumify.add('KEY', 'Label', 'Value');
```

**参数：**

- `key`: 枚举项的唯一键
- `label`: 枚举项的标签
- `value`: 枚举项的值（可以是数字或字符串）

### 删除枚举项

```typescript
enumify.remove('KEY');
```

**参数：**

- `key`: 要删除的枚举项的键

### 获取枚举项

```typescript
const item = enumify.get('KEY');
```

**返回值：**

- `EnumItem` 对象或 `undefined`（如果不存在）

### 获取所有枚举项

```typescript
const allItems = enumify.getAll();
```

**返回值：**

- `EnumItem` 对象的数组

### 根据键获取标签

```typescript
const label = enumify.getLabel('KEY');
```

**返回值：**

- 枚举项的标签或 `undefined`（如果不存在）

### 根据键获取值

```typescript
const value = enumify.getValue('KEY');
```

**返回值：**

- 枚举项的值（数字或字符串）或 `undefined`（如果不存在）

[build-img]: https://github.com/gexin1/js-enum-lib/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/gexin1/js-enum-lib/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/@gexin1/js-enum-lib
[downloads-url]: https://www.npmtrends.com/@gexin1/js-enum-lib
[npm-img]: https://img.shields.io/npm/v/@gexin1/js-enum-lib
[npm-url]: https://www.npmjs.com/package/@gexin1/js-enum-lib
[issues-img]: https://img.shields.io/github/issues/gexin1/js-enum-lib
[issues-url]: https://github.com/gexin1/js-enum-lib/issues
[codecov-img]: https://codecov.io/gh/gexin1/js-enum-lib/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/gexin1/js-enum-lib
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
