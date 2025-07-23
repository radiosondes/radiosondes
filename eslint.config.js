import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  typescript: true,
  svelte: true,
  ignores: [
    '**/src-tauri/gen',
  ],
});
