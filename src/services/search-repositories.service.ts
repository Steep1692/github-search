import { gql, useLazyQuery } from '@apollo/client';

import client from './apollo';
import { RepositoryEdgeType } from '@/types';

const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

type Response = {
  search: {
    edges: RepositoryEdgeType[]
  }
}

export const useSearchRepositories = () => {
  return useLazyQuery<Response>(SEARCH_REPOSITORIES, {
    client,
  });
};