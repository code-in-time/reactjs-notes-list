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
        "jsx-a11y/anchor-is-valid": "off"
      },
      "globals": {
        "document": false,
        "it": false,

      }
};