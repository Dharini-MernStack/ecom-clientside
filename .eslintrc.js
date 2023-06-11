module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
        "es6": true,
    },
    "extends": "eslint:recommended",

    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [

        "react-hooks"
    ],
    "rules": {

        "react-hooks/rules-of-hooks": "off", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "off",// Checks effect dependencies
        "no-unused-vars": "off"// updated
    }
}