export const STRIKE_API_KEY = process.env.STRIKE_API_KEY || "";
export const MERCURY_API_KEY = process.env.MERCURY_API_KEY || "";
export const ONCHAIN_ADDRESSES = process.env.ONCHAIN_ADDRESSES
  ? process.env.ONCHAIN_ADDRESSES.split(",")
  : [];

if (!STRIKE_API_KEY) {
  console.error(
    "Missing STRIKE_API_KEY. Please set it in your environment variables."
  );
}

if (!MERCURY_API_KEY) {
  console.error(
    "Missing MERCURY_API_KEY. Please set it in your environment variables."
  );
}

if (ONCHAIN_ADDRESSES.length === 0) {
  console.error("ONCHAIN_ADDRESSES environment variable is empty or not set.");
}
