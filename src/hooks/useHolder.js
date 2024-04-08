import holders from '/holders.json';

export const useHolder = (checkWallet) => {
  if (!checkWallet) return false

  let result = false;

  holders.forEach(holder => holder.Wallet.toLowerCase() == checkWallet.toLowerCase() ? result = { ...holder } : null );

  return result
}
