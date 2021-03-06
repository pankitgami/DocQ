module.exports = {
  'extends': 'airbnb',
    'parser': 'babel-eslint',
  'rules': {
    'react/jsx-filename-extension': [1, {'extensions': [`.js`, '.jsx']}],
    'react/destructuring-assignment': [true, { 'extensions': [".jsx"] }],
    'max-len': ["error", { "code": 150 }],
    'no-mixed-spaces-and-tabs': 'off',
    'react/jsx-no-bind': 0,
    'no-tabs':0,
    'react/prop-types':0
  },
  "env": {
    "browser": true,
    "node": true
  }
}