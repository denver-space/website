export const fetchBitcoinPrice = async () => {
  try {
    const response = await fetch("https://mempool.space/api/v1/prices");
    const data = await response.json();
    return data.USD;
  } catch (error) {
    console.error("Error fetching Bitcoin price:", error);
    return null;
  }
};
