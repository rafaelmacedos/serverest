import js from "@eslint/js";
import cypress from "eslint-plugin-cypress";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    plugins: { cypress },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha,
        cy: "readonly",
        Cypress: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "arrow-parens": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    },
  },
  {
    ignores: [
      "node_modules/",
      "cypress/screenshots/",
      "cypress/videos/",
      "allure-results/",
      "allure-report/",
      "patches/",
    ],
  },
];
