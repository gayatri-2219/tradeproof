import { submitTrade } from "../services/api.js";

export function renderTradeForm(container) {
  container.innerHTML = `
    <h2>Submit Trade</h2>
    <label>Trade JSON</label>
    <textarea id="trade-json" rows="6">{"symbol":"ETH","price":2500,"qty":1}</textarea>
    <button id="submit-trade-btn">Submit</button>
  `;

  container.querySelector("#submit-trade-btn").addEventListener("click", async () => {
    const raw = container.querySelector("#trade-json").value;
    const output = document.getElementById("result");

    try {
      const payload = JSON.parse(raw);
      const response = await submitTrade(payload);
      output.textContent = `Submitted. Hash: ${response.hash}`;
    } catch (err) {
      output.textContent = `Error: ${err.message}`;
    }
  });
}
