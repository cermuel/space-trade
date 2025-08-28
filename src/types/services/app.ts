export interface AppInterface {
  wallet_balance: string;
  reward_balance: string;
  promotions: Promotion[];
}

interface Promotion {
  id: number;
  title: string;
  banner_url: string;
  promotion_url: string;
  status: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
