module.exports = {
    root: true,
    extends: [
      'universe/native',
      'eslint:recommended', 
      'plugin:react/recommended', 
      'plugin:react-hooks/recommended'
    ],
    parserOptions: {
      'ecmaVersion': 12,
      'sourceType': 'module',
      'ecmaFeatures': {
        'jsx': true
      }
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      
    }
  };