module.exports = {
  plugins: ['react-native', 'react-hooks', 'eslint-plugin-import'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-native/all', // Enables all rules from react-native
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/indent': 'off',
    'react/prop-types': 'off',
    'react-native/sort-styles': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-raw-text': ['error'],
    'import/order': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'react-native',
        importNames: ['AsyncStorage'],
        message:
          'AsyncStorage from react-native is deprecated, use https://github.com/react-native-community/async-storage instead',
      },
    ],
    curly: 'error',
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'TSEnumDeclaration',
        message:
          "Don't declare enums, use union type : https://gist.github.com/matthieugicquel/6bd62f5e70289733331880856a668f5a",
      },
    ],
    'react-native/split-platform-components': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    'react-native/react-native': true,
  },
  // Glob based definitions
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
