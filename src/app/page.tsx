'use client'

import { useQuery } from '@tanstack/react-query'
import { graphqlClient } from "@/lib/graphql-client";
import { OffersList } from "@/components/OffersList";
import { OfferResponse, Offer } from "@/lib/types";

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
      <div className="flex justify-between items-center pt-6 px-8">
        <h1 className="text-2xl font-semibold">Explore Offers {!isLoading && `(${data?.getOffers?.list?.length})`}</h1>
        <div className="flex gap-4">
          <button 
            className="bg-transparent text-white px-4 py-[10px] rounded-lg border border-white/15 font-semibold text-sm">
              Sell Channels
          </button>
          <button 
            className="bg-white text-black px-4 py-[10px] rounded-lg font-semibold text-sm">
              Buy Channels
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="w-8 h-8 border-4 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div>
          <OffersList offers={data?.getOffers?.list as Offer[] | []} />
        </div>
      )}
    </div>
  );
}
