const context = require.context("./", false, /\.ts$/);
const keys = context.keys().filter(item => item !== "./index.ts");

const models = [];

for (const key of keys) {
  models.push(context(key));
}

export default models;
