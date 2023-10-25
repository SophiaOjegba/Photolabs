import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// Component for rendering the favorite icon button
const FavIconButton = ({ isFavorite, onToggle }) => {
  const handleIconClick = () => {
    onToggle();
  };

   // Rendering the favorite icon button
  return (
    <div className="photo-list__fav-icon">
    <div className="photo-list__fav-icon-svg" onClick={handleIconClick}>
      <FavIcon selected={isFavorite} />
    </div>
    </div>
  );
};

export default FavIconButton;







