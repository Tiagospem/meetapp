module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
      'no-useless-rename': ['error', {
        'ignoreDestructuring': true
    }],
    'no-unused-vars': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import' : {
        rootPathSuffix: 'src'
      }
    }
  }
}
