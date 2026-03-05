# TradeProof Workflow

1. `frontend/components/tradeForm.js` captures user trade data
2. `frontend/services/api.js` sends `POST /trade`
3. `backend/services/canonicalizationService.js` normalizes payload
4. `backend/services/hashService.js` computes deterministic hash
5. `backend/services/blockchainService.js` stores/fetches proof
6. `frontend/components/verifyTrade.js` calls verification API
