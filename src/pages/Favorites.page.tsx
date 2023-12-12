import {
  Rating as MuiRating,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { RepositoryType } from '../types/repository.type';

type Props = {
  favorites: RepositoryType[];
  favoritesRatings: Record<RepositoryType['id'], number>;
  onRatingChange: (id: RepositoryType['id'], value: number) => void;
  onRemoveFromFavorites: (id: RepositoryType['id']) => void;
}

const FavoritesPage: React.FC<Props> = ({ favoritesRatings, favorites, onRatingChange, onRemoveFromFavorites }) => {
  return (
    <List>
      {
        favorites.map((repo) => {
          const rating = favoritesRatings[repo.id]
          return (
            <ListItem key={repo.id}>
              <ListItemText primary={repo.name} secondary={`Rating: ${rating || 'Not rated'}`} />
              <MuiRating
                name="repository-rating"
                value={rating || 0}
                onChange={(event, newValue) => onRatingChange(repo.id, newValue || 0)}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => onRemoveFromFavorites(repo.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })
      }
      {
        favorites.length === 0 && (
          <ListItem>
            <ListItemText primary="No favorites yet" />
          </ListItem>
        )
      }
    </List>
  );
};

export default FavoritesPage;
