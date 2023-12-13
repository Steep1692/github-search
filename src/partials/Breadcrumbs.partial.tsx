import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

import { RepositoryRoute } from '@/routing';

export const BreadcrumbsPartial = () => {
  const location = useLocation();

  const isSearchPageValue = location.pathname === RepositoryRoute.SearchPage
  const breadcrumbsText = isSearchPageValue ? 'Search' : 'Favorites'

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">Github Search</Typography>
      <Typography color="textPrimary">{breadcrumbsText}</Typography>
    </Breadcrumbs>
  );
};
