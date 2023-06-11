module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parser": "react-scripts/node_modules/babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [

        "react-hooks"
    ],
    "rules": {

        "react-hooks/rules-of-hooks": "off", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "off",// Checks effect dependencies
        "no-unused-vars": "off"
    }
}