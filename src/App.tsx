import { FC, useReducer } from 'react';
import { Box, Container, Divider, Grid} from '@mui/material';

import { favReposActions, favReposInitialState, favReposReducer } from '@/store';
import { RepositoryType } from '@/types';
import { BreadcrumbsPartial, NavBarPartial } from '@/partials';
import { FavoritesPage, NotFoundPage, SearchPage } from '@/pages';
import { RepositoryRoutes } from '@/routing';

const App: FC = () => {
  const [favRepos, dispatchFavorites] = useReducer(favReposReducer, favReposInitialState);

  const addToFavorites = (repo: RepositoryType) => {
    dispatchFavorites(favReposActions.addToFavorites(repo));
  };

  const removeFromFavorites = (id: RepositoryType['id']) => {
    dispatchFavorites(favReposActions.removeFromFavorites(id));
  };

  const rateFavorite = (id: RepositoryType['id'], rating: number) => {
    dispatchFavorites(favReposActions.rateFavorite(id, rating));
  };

  return (
    <Container maxWidth="md">
      <Box>
        <Grid container gap={1} direction='column'>
          <NavBarPartial />
          <BreadcrumbsPartial />

          <Divider />

          <RepositoryRoutes
            SearchPage={<SearchPage favoriteRepositories={favRepos.favorites} onAddToFavorite={addToFavorites} />}
            FavoritesPage={<FavoritesPage
              favorites={favRepos.favorites}
              favoritesRatings={favRepos.ratings}
              onRatingChange={rateFavorite}
              onRemoveFromFavorites={removeFromFavorites}
            />}
            NotFoundPage={<NotFoundPage />}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default App;