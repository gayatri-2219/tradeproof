const crypto = require("crypto");

function generateSHA256(value) {
  const payload = typeof value === "string" ? value : JSON.stringify(value);
  return crypto.createHash("sha256").update(payload).digest("hex");
}

module.exports = { generateSHA256 };
