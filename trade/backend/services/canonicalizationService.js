function normalizeTradeData(tradeData) {
  if (!tradeData || typeof tradeData !== "object") {
    return {};
  }

  const sorted = Object.keys(tradeData)
    .sort()
    .reduce((acc, key) => {
      const value = tradeData[key];
      acc[key] = typeof value === "string" ? value.trim() : value;
      return acc;
    }, {});

  return sorted;
}

module.exports = { normalizeTradeData };
