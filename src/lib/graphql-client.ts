import { GraphQLClient } from 'graphql-request'

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL environment variable is not set')
}

export const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL) 