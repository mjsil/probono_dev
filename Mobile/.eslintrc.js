module.exports = {
    env: {
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.js', '.jsx'] },
        ],
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
    },
};
