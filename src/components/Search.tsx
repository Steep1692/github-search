import React, { useEffect, useState } from 'react';
import { useSearchRepositories } from '../services/github.service';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searchRepositories, { loading, data }] = useSearchRepositories();

  useEffect(() => {
    if (query.trim() !== '') {
      searchRepositories({
        variables: { query },
      });
    }
  }, [query, searchRepositories]);

  return (
    <div>
      <input
        type="text"
        value={ query }
        onChange={ (e) => setQuery(e.target.value) }
        placeholder="Search repositories"
      />
      { loading && <p>Loading...</p> }
      { data && (
        <ul>
          { data.search.edges.map((edge: any) => (
            <li key={ edge.node.id }>{ edge.node.name }</li>
          )) }
        </ul>
      ) }
    </div>
  );
};

export default Search;