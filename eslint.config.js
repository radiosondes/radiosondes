import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.ts', '**/*.svelte'],
    rules: {
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-union-types': [
        'error',
        {
          groups: ['unknown', 'nullish']
        }
      ],
      'perfectionist/sort-svelte-attributes': [
        'error',
        {
          customGroups: {
            this: 'this',
            'bind-this': 'bind:this',
            class: 'class',
            'bind-directives': 'bind:*',
            'use-directives': 'use:*'
          },
          groups: [
            ['this', 'bind-this'],
            'class',
            'unknown',
            'svelte-shorthand',
            'multiline',
            ['bind-directives', 'use-directives']
          ]
        }
      ]
    }
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/']
  }
);
