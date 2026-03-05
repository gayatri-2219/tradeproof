// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TradeProof {
    struct Proof {
        address submitter;
        uint256 timestamp;
        bool exists;
    }

    mapping(bytes32 => Proof) private proofs;

    event TradeHashStored(bytes32 indexed tradeHash, address indexed submitter, uint256 timestamp);

    function storeTradeHash(bytes32 tradeHash) external {
        require(tradeHash != bytes32(0), "Invalid hash");
        require(!proofs[tradeHash].exists, "Hash already exists");

        proofs[tradeHash] = Proof({
            submitter: msg.sender,
            timestamp: block.timestamp,
            exists: true
        });

        emit TradeHashStored(tradeHash, msg.sender, block.timestamp);
    }

    function verifyTradeHash(bytes32 tradeHash) external view returns (bool, address, uint256) {
        Proof memory proof = proofs[tradeHash];
        return (proof.exists, proof.submitter, proof.timestamp);
    }
}
