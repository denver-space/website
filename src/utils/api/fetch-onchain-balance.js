export const fetchOnChainBalance = async (addresses, bitcoinPrice) => {
  try {
    const balances = await Promise.all(
      addresses.map(async (address) => {
        const response = await fetch(
          `https://mempool.space/api/address/${address}`
        );
        const data = await response.json();
        const balance =
          (data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum) /
          100000000;
        return {
          address,
          balance,
          valueUSD: bitcoinPrice ? balance * bitcoinPrice : 0,
        };
      })
    );

    const totalBalance = balances.reduce((sum, item) => sum + item.balance, 0);
    const totalValueUSD = balances.reduce(
      (sum, item) => sum + item.valueUSD,
      0
    );

    return { balance: totalBalance, valueUSD: totalValueUSD };
  } catch (error) {
    console.error("Error fetching On-Chain balance:", error);
    return { balance: 0, valueUSD: 0 };
  }
};
