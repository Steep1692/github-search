import { FC, useState } from 'react';
import { TextField, CircularProgress, List, ListItem, ListItemText, debounce, Grid, Button } from '@mui/material';

import { RepositoryType } from '@/types';
import { useSearchRepositories } from '@/services';

type Props = {
  favoriteRepositories: RepositoryType[];
  onAddToFavorite: (repository: RepositoryType) => void;
}

export const SearchPage: FC<Props> = ({ favoriteRepositories, onAddToFavorite }) => {
  const [query, setQuery] = useState('');
  const [searchRepositories, { loading, data }] = useSearchRepositories();

  const debouncedSearch = debounce((searchQuery: string) => {
    searchRepositories({
      variables: { query: searchQuery },
    });
  }, 300); // Adjust the debounce delay as needed (e.g., 300 milliseconds)

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  return (
    <Grid>
      <TextField
        label="SearchPage repositories"
        variant="outlined"
        value={query}
        onChange={handleQueryChange}
        fullWidth
        margin="normal"
      />
      {loading && <CircularProgress />}
      {data && query && (
        <List>
          {data.search.edges.map((edge, index) => {
            const isFavorite = favoriteRepositories.some((repository) => repository.id === edge.node.id);
            const favoriteButton = isFavorite ? (
              <Button variant="outlined" disabled>
                Added to Favorite
              </Button>
            ) : (
              <Button variant="outlined" onClick={() => onAddToFavorite(edge.node)}>
                Add to Favorite
              </Button>
            );

            return (
              <ListItem key={edge.node.id}>
                <Grid container spacing={2}>
                  <Grid item xs="auto">
                    <ListItemText primary={index + 1} />
                  </Grid>
                  <Grid item xs="auto">
                    <ListItemText primary={edge.node.name} />
                  </Grid>
                </Grid>
                <Grid item xs="auto">
                  {favoriteButton}
                </Grid>
              </ListItem>
            )
          })}
          {
            data.search.edges.length === 0 && (
              <ListItem>
                <ListItemText primary="No results found" />
              </ListItem>
            )
          }
        </List>
      )}
      {
        !loading && (!query || !data) && (
          <ListItem>
            <ListItemText primary="Your search results will be displayed here" />
          </ListItem>
        )
      }
    </Grid>
  );
};
