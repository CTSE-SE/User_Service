export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", ".github/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly"
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
      "no-console": "off"
    }
  }
];