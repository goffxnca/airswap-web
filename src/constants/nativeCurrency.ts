import { TokenInfo } from "@uniswap/token-lists";

const nativeCurrency: Record<number, TokenInfo> = {
  1: {
    chainId: 1,
    address: "0x0000000000000000000000000000000000000000",
    name: "Ether",
    decimals: 18,
    symbol: "ETH",
    logoURI: "images/ethereum-logo.png",
  },
  4: {
    chainId: 4,
    address: "0x0000000000000000000000000000000000000000",
    name: "Ether",
    decimals: 18,
    symbol: "ETH",
    logoURI: "images/ethereum-logo.png",
  },
  5: {
    chainId: 5,
    address: "0x0000000000000000000000000000000000000000",
    name: "Ether",
    decimals: 18,
    symbol: "ETH",
    logoURI: "images/ethereum-logo.png",
  },
  56: {
    chainId: 56,
    address: "0x0000000000000000000000000000000000000000",
    name: "BNB",
    decimals: 18,
    symbol: "BNB",
    logoURI: "images/bnb-logo.png",
  },
  97: {
    chainId: 97,
    address: "0x0000000000000000000000000000000000000000",
    name: "BNB",
    decimals: 18,
    symbol: "BNB",
    logoURI: "images/bnb-logo.png",
  },
  137: {
    chainId: 137,
    address: "0x0000000000000000000000000000000000000000",
    name: "MATIC",
    decimals: 18,
    symbol: "MATIC",
    logoURI: "images/matic-logo.png",
  },
  43113: {
    chainId: 43113,
    address: "0x0000000000000000000000000000000000000000",
    name: "AVAX",
    decimals: 18,
    symbol: "AVAX",
    logoURI: "images/avalanche-logo.png",
  },
  43114: {
    chainId: 43114,
    address: "0x0000000000000000000000000000000000000000",
    name: "AVAX",
    decimals: 18,
    symbol: "AVAX",
    logoURI: "images/avalanche-logo.png",
  },
  80001: {
    chainId: 80001,
    address: "0x0000000000000000000000000000000000000000",
    name: "MATIC",
    decimals: 18,
    symbol: "MATIC",
    logoURI: "images/matic-logo.png",
  },
};

export default nativeCurrency;