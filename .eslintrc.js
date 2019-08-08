module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-console": 0,
    "no-param-reassign": [2, { "props": false }],
    "comma-dangle": 0,
    "linebreak-style": ["error", "windows"],
  },
  "env": {
    "commonjs": true,
    "node": true,
    "mocha": true
  },
};