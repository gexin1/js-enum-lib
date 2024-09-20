import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  shims: true,
  clean: true,
  dts: true,
  silent: true,
  target: 'es5',            // 将目标版本设置为 ES5
});
