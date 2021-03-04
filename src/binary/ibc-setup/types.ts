export type Chain = {
  chain_id: string;
  prefix: string;
  gas_price: string;
  hd_path: string;
  rpc: string[];
};

export type Registry = {
  version: number;
  chains: Record<string, Chain>;
};

export type AppConfig = {
  src?: string;
  dest?: string;
  mnemonic?: string;
  keyFile?: string;
};
