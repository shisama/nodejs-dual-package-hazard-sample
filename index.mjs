import assert from "assert";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const main = async() => {
  const m1 = (await import("package1")).default;
  assert.strictEqual(m1.foo, "bar");
  const m2 = require("package1");
  assert.strictEqual(m2.foo, "bar");

  // overwrite
  const val = "changed!"
  m1.foo = val;
  assert.strictEqual(m1.foo, val);
  assert.strictEqual(m2.foo, val); // Error m2.foo is 'bar'
  console.log("m1", m1);
  console.log("m2", m2);

  // assert.strictEqual(m2.foo, "bar"); // OK
}

main();