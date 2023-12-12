import React from 'react';
import Search from './components/Search';
import Favorites from './components/Favorites';

const App: React.FC = () => {
  return (
    <div>
      <h1>Github Search</h1>
      <Search />
      <Favorites />
    </div>
  );
};

export default App;