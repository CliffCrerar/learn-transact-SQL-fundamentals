const { configs } = require('eslint-plugin-mdx')

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:mdx/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    overrides: [
        {
          files: ['*.md'],
          rules: {
            'prettier/prettier': [
              2,
              {
                // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
                parser: 'markdown',
              },
            ],
          },
        },
        Object.assign(
          {
            files: ['*.mdx'],
          },
          configs.overrides,
        ),
      ],
};