module.exports = {
  "extends": "airbnb",
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": "off",
      "react/forbid-prop-types": 0,
      "quotes": [2, "single", "avoid-escape"],
      "no-console": "off",
      "max-len": ["error", { "code": 180 }],
      "no-plusplus": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "no-case-declarations": "off",
      "no-param-reassign": "off",
      "react/no-array-index-key": "off",
      "jsx-a11y/label-has-for": [ 2, {
        "components": [ "Label" ],
        "required": {
            "some": [ "nesting", "id" ]
        },
        "allowChildren": false,
      }]
    },
  "globals": {
    "document": false,
    "window": false,
    "isNaN": false,
    // These are for testing
    "expect": false,
    "it": false,
    "jest": false,
    "describe": false,
  },
  "env": {
    "browser": true,
    "node": true
  }
};