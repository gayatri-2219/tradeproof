const BASE_URL = "http://localhost:4000/api";

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export function submitTrade(payload) {
  return request("/trade", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export function verifyTrade(payload) {
  return request("/verify", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}
