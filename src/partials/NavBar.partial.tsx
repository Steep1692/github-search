import { Link } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import { Search as SearchIcon, Favorite as FavoriteIcon } from '@mui/icons-material';

import { RepositoryRoute } from '@/routing';

export const NavBarPartial = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container gap={1}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GitHub Repositories
          </Typography>
          <Button startIcon={<SearchIcon />} component={ Link } to={ RepositoryRoute.SearchPage } color="inherit">
            Search
          </Button>
          <Button startIcon={<FavoriteIcon />} component={ Link } to={ RepositoryRoute.FavoritesPage } color="inherit">
            Favorites
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};