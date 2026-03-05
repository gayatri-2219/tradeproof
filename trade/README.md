# TradeProof

TradeProof is a Web3 project for creating tamper-evident trade records.

## What it does
- Accepts trade details from a frontend form
- Canonicalizes data for deterministic hashing
- Generates SHA-256 hash of the normalized trade payload
- Stores and verifies hash references through a smart contract workflow

## Project Structure
- `contracts/` Solidity contracts
- `scripts/` deployment scripts
- `backend/` API, business logic, blockchain services
- `frontend/` UI and API integration
- `blockchain/` ABI and deployed address references
- `docs/` architecture and workflow docs
- `tests/` contract and hashing tests

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start backend:
   ```bash
   npm run start
   ```
3. Open `frontend/index.html` in browser.

## Notes
- This scaffold provides structure and starter code.
- Add environment variables in `.env` for RPC URLs and private keys.
