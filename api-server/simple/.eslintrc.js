const fs = require('fs');
const path = require('path');
const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    extends: [
        'airbnb-base',
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
};
