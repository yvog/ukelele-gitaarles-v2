import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(process.env.HYGRAPH_API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
  },
});
