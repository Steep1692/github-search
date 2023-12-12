import { FC, useReducer } from 'react';
import { Box, Container, Divider, Grid} from '@mui/material';

import { favReposActions, favReposInitialState, favReposReducer } from './store/favorite-repositories.reducer';
import { RepositoryType } from './types/repository.type';
import RepositoryRoutes from './routing/RepositoriesRoutes.component';

import SearchPage from './pages/Search.page';
import FavoritesPage from './pages/Favorites.page';

import NavBarPartial from './partials/NavBar.partial';
import BreadcrumbsPartial from './partials/Breadcrumbs.partial';

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
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default App;