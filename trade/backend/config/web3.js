// Configure web3/ethers provider details here.
module.exports = {
  rpcUrl: process.env.RPC_URL || "http://127.0.0.1:8545",
  chainId: Number(process.env.CHAIN_ID || 31337)
};
