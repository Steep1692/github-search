import React, { useState } from 'react';

const Favorites: React.FC = () => {
  const [rating, setRating] = useState(0); // User's rating for the favorite repository

  return (
    <div>
      <h2>Favorites</h2>
      {/* Map through your favorite repositories */}
      <ul>
        <li>
          Repository Name – Rating: {rating}
          <button onClick={() => setRating(1)}>1</button>
          <button onClick={() => setRating(2)}>2</button>
          <button onClick={() => setRating(3)}>3</button>
          <button onClick={() => setRating(4)}>4</button>
          <button onClick={() => setRating(5)}>5</button>
          <button onClick={() => alert('Remove from favorites')}>Remove</button>
        </li>
        {/* Repeat the structure for each favorite repository */}
      </ul>
    </div>
  );
};

export default Favorites;