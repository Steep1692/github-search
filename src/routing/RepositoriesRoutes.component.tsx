import { FC, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';

import { RepositoryRoute } from './RepositoriesRoute.constants';

type Props = {
  SearchPage: ReactNode;
  FavoritesPage: ReactNode;
  NotFoundPage: ReactNode;
}

export const RepositoryRoutes: FC<Props> = ({ SearchPage, FavoritesPage, NotFoundPage }) => (
  <Routes>
    <Route index path={RepositoryRoute.SearchPage} element={SearchPage}/>
    <Route path={RepositoryRoute.FavoritesPage} element={FavoritesPage}/>
    <Route path='*' element={NotFoundPage}/>
  </Routes>
);