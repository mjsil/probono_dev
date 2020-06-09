module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.js', '.jsx'] },
        ],
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
    },
};
