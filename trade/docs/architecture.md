# TradeProof Architecture

## Components
- Frontend: captures trade data and requests verification
- Backend API: validates input, canonicalizes payload, hashes data
- Blockchain service: stores and verifies trade hash references
- Smart contract: immutable registry of proof records

## High-Level Flow
1. User submits trade
2. Backend normalizes payload
3. Backend generates SHA-256 hash
4. Hash is persisted through blockchain service
5. Verification endpoint checks hash consistency
