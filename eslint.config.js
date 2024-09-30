import { configApp } from "@adonisjs/eslint-config";

const rules = {
  quotes: ["error", "double"],
  semi: ["error", "always"],
};

const config = configApp();

config[2].rules = {
  ...config[2].rules,
  ...rules,
};

export default config;
