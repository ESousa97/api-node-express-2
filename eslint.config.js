import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ["node_modules/", "coverage/", "dist/"]
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      ecmaVersion: 2022,
      sourceType: "module"
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-console": "off",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "linebreak-style": "off"
    }
  }
];