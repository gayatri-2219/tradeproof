const test = require("node:test");
const assert = require("node:assert/strict");

const { generateSHA256 } = require("../backend/services/hashService");

test("generateSHA256 is deterministic", () => {
  const a = generateSHA256({ symbol: "ETH", qty: 1 });
  const b = generateSHA256({ symbol: "ETH", qty: 1 });

  assert.equal(a, b);
});
