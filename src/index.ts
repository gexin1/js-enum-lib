type EnumItem<T = number | string> = {
  key: string;
  label: string;
  value: T;
};

type EnumValues<T = number | string> = Record<string, EnumItem<T>>;

export class Enumify<T = number | string> {
  private values: EnumValues<T>;

  constructor(defaultValue: EnumValues<T> = {}) {
    this.values = defaultValue;
  }

  // 添加枚举项
  add(key: string, label: string, value: T): void {
    if (!key || this.values[key]) {
      console.error(`Key "${key}" is either empty or already exists.`);
      return;
    }
    this.values[key] = { key, label, value };
  }

  // 删除枚举项
  remove(key: string): void {
    if (this.values[key]) {
      delete this.values[key];
    } else {
      console.error(`Key "${key}" does not exist.`);
    }
  }

  // 清空枚举值
  removeAll(): void {
    this.values = {};
  }

  // 获取枚举项
  get(key: string): EnumItem<T> | undefined {
    return this.values[key];
  }

  // 获取所有枚举项
  getAll(): EnumItem<T>[] {
    return Object.values(this.values);
  }

  // 根据 key 获取 label
  getLabel(key: string): string | undefined {
    return this.values[key]?.label;
  }

  // 根据 key 获取 value
  getValue(key: string): T | undefined {
    return this.values[key]?.value;
  }
}
