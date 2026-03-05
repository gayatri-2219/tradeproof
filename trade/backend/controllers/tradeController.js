const { normalizeTradeData } = require("../services/canonicalizationService");
const { generateSHA256 } = require("../services/hashService");
const { storeHash, fetchHash } = require("../services/blockchainService");

async function submitTrade(req, res) {
  try {
    const normalized = normalizeTradeData(req.body || {});
    const hash = generateSHA256(normalized);
    const proof = await storeHash(hash);

    return res.status(201).json({ hash, proof });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function verifyTrade(req, res) {
  try {
    const normalized = normalizeTradeData(req.body || {});
    const hash = generateSHA256(normalized);
    const proof = await fetchHash(hash);

    return res.json({ hash, verified: Boolean(proof?.exists), proof });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTradeByHash(req, res) {
  try {
    const { hash } = req.params;
    const proof = await fetchHash(hash);
    return res.json({ hash, proof });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  submitTrade,
  verifyTrade,
  getTradeByHash
};
