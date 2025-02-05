export default function useTokenInfo(dstInfo: any) {
  if (!dstInfo) {
    return { data: null };
  }
  const { mint, metadata, imageUrl } = dstInfo.metadata;

  return {
    data: {
      mint: mint.publicKey,
      symbol: metadata.symbol,
      decimals: mint.decimals,
      ...(imageUrl && { iconUrl: imageUrl }),
    },
  };
}
