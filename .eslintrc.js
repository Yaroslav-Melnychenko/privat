module.exports = {
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "react-app",
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:import/stage-0",

    "plugin:jsx-a11y/recommended",
    "plugin:jsx-a11y/strict",

    "plugin:react/recommended",
  ],
  "plugins": [
    "import",
    "jsx-a11y",
    "react",
  ],
  "rules": {
    "import/no-unresolved": "off",
     "import/named": 2,
     "import/namespace": 2,
     "import/default": 2,
     "import/export": 2,

     "react/jsx-uses-react": "error",
     "react/jsx-uses-vars": "error",

     "space-in-parens": [ 0, "always" ],
     "template-curly-spacing": [ 2, "never" ],
     "array-bracket-spacing": [ 2, "always" ],
     "object-curly-spacing": [ 2, "always" ],
     "computed-property-spacing": [ 2, "always" ],
     "no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
     "quotes": [ 1, "single", "avoid-escape" ],
     "no-use-before-define": [ 2, { "functions": false } ],
     "semi": [0, "never"],
     "prefer-const": 1,
     "react/prefer-es6-class": 0,
     "react/jsx-filename-extension": 0,
     "react/jsx-indent": [ 2, 2 ],
     "react/prop-types": [ 1 ],
     "react/no-array-index-key": [ 1 ],
     "class-methods-use-this": [ 1 ],
     "no-undef": [ 1 ],
     "no-case-declarations": [ 1 ],
     "no-return-assign": [ 1 ],
     "no-param-reassign": [ 1 ],
     "no-shadow": [ 1 ],
     "camelcase": [ 1 ],
     "no-underscore-dangle" : [0, "always"],
    "import/prefer-default-export": "off",
  }
}