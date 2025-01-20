import { MERCURY_API_KEY } from "../../lib/apiclients";

export const fetchMercuryBalance = async () => {
  try {
    if (!MERCURY_API_KEY) {
      throw new Error(
        "Mercury API key is not set. Please check your environment variables."
      );
    }

    const proxyUrl = "http://localhost:8080/"; // TODO: Host server
    const targetUrl = "https://api.mercury.com/api/v1/accounts";

    const response = await fetch(proxyUrl + targetUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${MERCURY_API_KEY}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const checkingAccount = data.accounts.find(
      (account) => account.kind === "checking"
    );

    return checkingAccount
      ? {
          balance: checkingAccount.currentBalance || 0,
          valueUSD: checkingAccount.currentBalance || 0,
        }
      : { balance: 0, valueUSD: 0 };
  } catch (error) {
    console.error("Error fetching Mercury balance:", error.message);
    return { balance: 0, valueUSD: 0 };
  }
};
