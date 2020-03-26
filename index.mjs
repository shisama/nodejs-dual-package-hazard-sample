import assert from "assert";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const main = async() => {
  const esm = (await import("package1")).default;
  assert.strictEqual(esm.foo, "bar");
  const cjs = require("package1");
  assert.strictEqual(cjs.foo, "bar");

  // overwrite
  const val = "changed!"
  esm.foo = val;
  assert.strictEqual(esm.foo, val);
  assert.strictEqual(cjs.foo, "bar");
  assert.strictEqual(cjs.foo, val); // Error cjs.foo is 'bar'
}

main();