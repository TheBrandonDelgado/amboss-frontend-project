'use client'

// import { useQuery } from '@tanstack/react-query'
// import { graphqlClient } from "@/lib/graphql-client";
import { useEffect } from 'react';

export default function Home() {

  // const { data, isLoading } = useQuery({
  //   queryKey: ['offers'],
  //   queryFn: async () => {
  //     try {
  //       const data = await graphqlClient.request(
  //         `query List {
  //           getOffers {
  //             list {
  //               account
  //               amboss_fee_rate
  //               base_fee
  //               base_fee_cap
  //               conditions {
  //                 condition
  //                 operator
  //                 value
  //               }
  //               fee_rate
  //               fee_rate_cap
  //               id
  //               max_size
  //               min_block_length
  //               min_size
  //               offer_type
  //               onchain_multiplier
  //               onchain_priority
  //               orders {
  //                 locked_size
  //               }
  //               seller_score
  //               side
  //               status
  //               tags {
  //                 name
  //               }
  //               total_size
  //             }
  //           }
  //         }`,
  //         {}
  //       );
        
  //       // Handle 204 response by returning empty list
  //       if (!data) {
  //         return { getOffers: { list: [] } };
  //       }
        
  //       return data;
  //     } catch (error) {
  //       console.error('Error fetching offers:', error);
  //       throw error;
  //     }
  //   },
  //   // You might want to add these options:
  //   retry: false, // Don't retry if we get a 204
  //   staleTime: 1000 * 60, // Consider data fresh for 1 minute
  // })

  const fetchOffers = async () => {
    const response = await fetch('https://api.amboss.space/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: 'query List { getOffers { list { account } } }' }),
    })
    const data = await response.json()
    console.log(data)
    return data
  }

  useEffect(() => {
    fetchOffers()
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center py-12 px-8">
        <h1 className="text-2xl font-semibold">Explore Offers</h1>
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
