export interface OfferResponse {
    getOffers: {
      list: Array<{
        account: string;
        avatar: string;
        amboss_fee_rate: number;
        base_fee: number;
        base_fee_cap: number;
        conditions: Array<{
          condition: string;
          operator: string;
          value: string;
        }>;
        fee_rate: number;
        fee_rate_cap: number;
        id: string;
        max_size: number;
        min_block_length: number;
        min_size: number;
        offer_type: string;
        onchain_multiplier: number;
        onchain_priority: number;
        orders: Array<{
          locked_size: string;
        }>;
        seller_score: number;
        side: string;
        status: string;
        tags: Array<{
          name: string;
        }>;
        total_size: number;
      }>;
    };
}
  
export interface Tag {
      name: string;
}
  
export interface Condition {
    condition: string;
    value: string;
}
  
export interface Orders {
    locked_size: string;
}
  
export interface Offer {
    account: string;
    tags: Tag[];
    conditions: Condition[];
    seller_score: string | number;
    base_fee: string | number;
    fee_rate_cap: string | number;
    fee_rate: string | number;
    min_size: number;
    max_size: number;
    total_size: string | number;
    orders: Orders;
}

export interface MockedData {
    min_channel_age: number;
    max_apr: number;
    min_apr: number;
    orders: number;
    capacity: number;
}