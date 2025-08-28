export interface Rate {
  id: number;
  name: string;
  code: string;
  icon: string;
  networks: Network[];
  status: number;
  created_at: string;
  updated_at: string;
  is_stable: number;
  color: string;
  minimumDeposit: string;
  maximumDecimalPlaces: number;
  naira_rate: string;
  usd_rate: string;
}

interface Network {
  id: number;
  obiex_crypto_id: number;
  addressRegex: string;
  memoRegex: unknown;
  name: string;
  code: string;
  fee: string;
  feeType: string;
  minimum: string;
  contractAddress: unknown | string;
  explorerLink: unknown;
  created_at: string;
  updated_at: string;
}
