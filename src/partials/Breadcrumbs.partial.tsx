import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

import { repositoryRoutes } from '../routing/RepositoriesRoutes.routes';

const BreadcrumbsPartial = () => {
  const location = useLocation();

  const isSearchPageValue = location.pathname === repositoryRoutes.SearchPage
  const breadcrumbsText = isSearchPageValue ? 'Search' : 'Favorites'

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">Github Search</Typography>
      <Typography color="textPrimary">{breadcrumbsText}</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsPartial;