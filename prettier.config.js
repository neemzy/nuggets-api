import adonisPrettierConfig from "@adonisjs/prettier-config" assert { type: "json" };

export default {
  ...adonisPrettierConfig,
  arrowParens: "avoid",
  semi: true,
  singleQuote: false,
};
