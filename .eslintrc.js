module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": "off",
        "quotes": [2, "single", "avoid-escape"],
        'no-console': 'off',
      },
      "globals": {
        "document": false,
        "it": false,

      }
};