export type Chain = {
    chainId: string;
    name: string;
    blockExplorerUrl: string;
    rpcUrl: string;
  };
  
export const goerli: Chain = {
    chainId: '5',
    name: 'Goerli',
    blockExplorerUrl: 'https://goerli.etherscan.io',
    rpcUrl: 'https://goerli.infura.io/v3/1cdbc57a56604eed870c45621006a341',
};

export const mainnet: Chain = {
    chainId: '1',
    name: 'Ethereum',
    blockExplorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://mainnet.infura.io/v3/1cdbc57a56604eed870c45621006a341',
};

export const sepolia: Chain = {
    chainId: '11155111',
    name: 'Sepolia',
    blockExplorerUrl: 'https://sepolia.etherscan.io/',
    rpcUrl: 'https://sepolia.infura.io/v3/1cdbc57a56604eed870c45621006a341',
  };
export const CHAINS_CONFIG = {
    [goerli.chainId]: goerli,
    [mainnet.chainId]: mainnet,
    [sepolia.chainId]: sepolia,
};