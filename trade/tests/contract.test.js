const test = require("node:test");
const assert = require("node:assert/strict");

const { storeHash, fetchHash } = require("../backend/services/blockchainService");

test("storeHash persists record", async () => {
  const hash = "abc123";
  await storeHash(hash);
  const proof = await fetchHash(hash);

  assert.equal(proof.exists, true);
  assert.equal(proof.hash, hash);
});
