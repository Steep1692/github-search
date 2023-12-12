import { RepositoryType } from './repository.type';

export type RepositoryEdgeType<T = RepositoryType> = {
  node: T
}