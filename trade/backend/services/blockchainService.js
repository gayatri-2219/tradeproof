// Placeholder in-memory proof store. Replace with web3/ethers contract calls.
const proofs = new Map();

async function storeHash(hash) {
  const record = {
    hash,
    exists: true,
    timestamp: Date.now(),
    txHash: "0xplaceholder"
  };

  proofs.set(hash, record);
  return record;
}

async function fetchHash(hash) {
  return proofs.get(hash) || { exists: false };
}

module.exports = { storeHash, fetchHash };
