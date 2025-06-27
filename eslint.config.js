import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  {
    ignores: ["dist/**/*"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
