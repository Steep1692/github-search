import { FC, useState } from 'react';

import {
  Rating as MuiRating,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { RepositoryType } from '@/types';

type Props = {
  favorites: RepositoryType[];
  favoritesRatings: Record<RepositoryType['id'], number>;
  onRatingChange: (id: RepositoryType['id'], value: number) => void;
  onRemoveFromFavorites: (id: RepositoryType['id']) => void;
}

export const FavoritesPage: FC<Props> = ({ favoritesRatings, favorites, onRatingChange, onRemoveFromFavorites }) => {
  const [repoToRemove, setRepoToRemove] = useState<RepositoryType | null>(null);

  const handleOpen = (repo) => {
    setRepoToRemove(repo);
  };

  const handleClose = () => {
    setRepoToRemove(null);
  };

  const handleDelete = () => {
    onRemoveFromFavorites(repoToRemove.id);
    handleClose();
  };

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
                <IconButton edge="end" aria-label="delete" onClick={() => handleOpen(repo)}>
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

      {/* Deletion Confirmation Dialog */}
      <Dialog open={!!repoToRemove} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove the repository "{repoToRemove?.name}" from favorites?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </List>
  );
};
