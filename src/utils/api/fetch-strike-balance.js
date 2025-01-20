import { STRIKE_API_KEY } from "../../lib/apiclients";

export const fetchStrikeBalance = async (bitcoinPrice) => {
  try {
    if (!STRIKE_API_KEY) {
      throw new Error(
        "Strike API key is not set. Please check your environment variables."
      );
    }

    const response = await fetch("https://api.strike.me/v1/balances", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${STRIKE_API_KEY}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();

    if (Array.isArray(data)) {
      const btcBalance = parseFloat(
        data.find((balance) => balance.currency === "BTC")?.current || 0
      );
      const usdBalance = btcBalance * bitcoinPrice || 0;
      return { btcBalance, usdBalance };
    } else {
      console.error("Unexpected Strike data format:", data);
      return { btcBalance: 0, usdBalance: 0 };
    }
  } catch (error) {
    console.error("Error fetching Strike balance:", error);
    return { btcBalance: 0, usdBalance: 0 };
  }
};
