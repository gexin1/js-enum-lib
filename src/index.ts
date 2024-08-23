type EnumItem = {
  key: string;
  label: string;
  value: number | string;
};

type EnumValues = Record<string, EnumItem>;

export class Enumify {
  private values: EnumValues;

  constructor(defaultValue: EnumValues = {}) {
    this.values = defaultValue;
  }

  // 添加枚举项
  add(key: string, label: string, value: number | string): void {
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

  // 获取枚举项
  get(key: string): EnumItem | undefined {
    return this.values[key];
  }

  // 获取所有枚举项
  getAll(): EnumItem[] {
    return Object.values(this.values);
  }

  // 根据 key 获取 label
  getLabel(key: string): string | undefined {
    return this.values[key]?.label;
  }

  // 根据 key 获取 value
  getValue(key: string): number | string | undefined {
    return this.values[key]?.value;
  }
}
