const assert = require("assert");

const m1 = require("package1");
assert.strictEqual(m1.foo, "bar");
const m2 = require("package1"); // m1 and m2 are same module.
assert.strictEqual(m2.foo, "bar");

// overwrite
const val = "changed!"
m1.foo = val;
assert.strictEqual(m1.foo, val);
assert.strictEqual(m2.foo, val);
console.log("m1", m1);
console.log("m2", m2);