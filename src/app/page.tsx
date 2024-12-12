'use client'

import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from "@/lib/graphql-client";

interface OfferResponse {
  getOffers: {
    list: Array<{
      account: string;
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
        locked_size: number;
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

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['offers'],
    queryFn: async () => {
      try {
        const data = await graphqlClient.request<OfferResponse>(
          `query List {
            getOffers {
              list {
                account
                amboss_fee_rate
                base_fee
                base_fee_cap
                conditions {
                  condition
                  operator
                  value
                }
                fee_rate
                fee_rate_cap
                id
                max_size
                min_block_length
                min_size
                offer_type
                onchain_multiplier
                onchain_priority
                orders {
                  locked_size
                }
                seller_score
                side
                status
                tags {
                  name
                }
                total_size
              }
            }
          }`,
          {}
        );
        
        // Handle 204 response by returning empty list
        if (!data) {
          return { getOffers: { list: [] } };
        }
        
        console.log(data)
        return data;
      } catch (error) {
        console.error('Error fetching offers:', error);
        throw error;
      }
    },
    retry: false,
    staleTime: 1000 * 60,
  });

  return (
    <div>
      <div className="flex justify-between items-center py-12 px-8">
        <h1 className="text-2xl font-semibold">Explore Offers ({data?.getOffers?.list?.length})</h1>
        <div className="flex gap-4">
          <button className="bg-transparent text-white px-4 py-[10px] rounded-lg border border-white/15 font-semibold text-sm">Sell Channels</button>
          <button className="bg-white text-black px-4 py-[10px] rounded-lg font-semibold text-sm">Buy Channels</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
