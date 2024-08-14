// eslint.config.js
import js from "@eslint/js";
import vue from "eslint-plugin-vue";

export default [
  {
    files: ["*.js", "*.vue"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      vue,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...vue.configs["vue3-recommended"].rules,
    },
  },
];
