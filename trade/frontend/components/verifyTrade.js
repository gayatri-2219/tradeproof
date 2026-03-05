import { verifyTrade } from "../services/api.js";

export function renderVerifyTrade(container) {
  container.innerHTML = `
    <h2>Verify Trade</h2>
    <label>Trade JSON</label>
    <textarea id="verify-json" rows="6">{"symbol":"ETH","price":2500,"qty":1}</textarea>
    <button id="verify-trade-btn">Verify</button>
  `;

  container.querySelector("#verify-trade-btn").addEventListener("click", async () => {
    const raw = container.querySelector("#verify-json").value;
    const output = document.getElementById("result");

    try {
      const payload = JSON.parse(raw);
      const response = await verifyTrade(payload);
      output.textContent = `Verified: ${response.verified} | Hash: ${response.hash}`;
    } catch (err) {
      output.textContent = `Error: ${err.message}`;
    }
  });
}
