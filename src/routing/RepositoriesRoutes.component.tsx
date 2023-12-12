import { FC, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';

import { repositoryRoutes } from './RepositoriesRoutes.routes';

type Props = {
  SearchPage: ReactNode;
  FavoritesPage: ReactNode;
}

const RepositoryRoutes: FC<Props> = ({ SearchPage, FavoritesPage }) => (
  <Routes>
    <Route path={repositoryRoutes.SearchPage} element={SearchPage}/>
    <Route path={repositoryRoutes.FavoritesPage} element={FavoritesPage}/>
  </Routes>
);

export default RepositoryRoutes