import { RepositoryType } from '../types/repository.type';

const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
const RATE_FAVORITE = 'RATE_FAVORITE';

export const favReposInitialState = {
  favorites: [] as RepositoryType[],
  ratings: {} as Record<RepositoryType['id'], number>,
};

export const favReposActions = {
  addToFavorites: (repository: RepositoryType) => ({
    type: ADD_TO_FAVORITES,
    payload: repository,
  }) as const,
  removeFromFavorites: (id: RepositoryType['id']) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  }) as const,
  rateFavorite: (id: RepositoryType['id'], rating: number) => ({
    type: RATE_FAVORITE,
    payload: { id, rating },
  }) as const,
};

export type FavReposState = typeof favReposInitialState;
type Action = ReturnType<typeof favReposActions[keyof typeof favReposActions]>;

export const favReposReducer = (state: FavReposState, action: Action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((r) => r.id !== action.payload),
      };

    case RATE_FAVORITE:
      return {
        ...state,
        ratings: {
          ...state.ratings,
          [action.payload.id]: action.payload.rating,
        }
      };

    default:
      return state;
  }
};