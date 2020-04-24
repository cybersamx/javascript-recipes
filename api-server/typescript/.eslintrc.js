const fs = require('fs');
const path = require('path');
const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    extends: [
        'airbnb-typescript/base',
        'prettier/@typescript-eslint',
        'prettier',
    ],
    env: {
        jest: true,
        node: true,
        es2017: true,
    },
    plugins: [
        'prettier',
    ],
    rules: {
        // 'off' = 0, 'warn' = 1, 'error' = 2
        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'arrow-parens': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'class-methods-use-this': 'error',
        'common-dangle': 'off',
        'consistent-return': 'off',
        'indent': ['error', 4],
        'max-len': ['warn', { code: 120 }],
        'no-confusing-arrow': 'warn',
        'no-consecutive-blank-lines': 'off',
        'no-console': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'prettier/prettier': ['error', prettierOptions],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
