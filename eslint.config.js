import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import eslintConfigPrittier from "eslint-config-prettier";

export default defineConfig([
  eslint.configs.recommended,
  eslintConfigPrittier,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  {
    ignores: ["dist/**/*", "src/env.d.ts"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
