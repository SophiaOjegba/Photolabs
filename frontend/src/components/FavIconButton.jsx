import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


const FavIconButton = ({ isFavorite, onToggle }) => {
  const handleIconClick = () => {
    onToggle();
  };

  return (
    <div className="photo-list__fav-icon">
    <div className="photo-list__fav-icon-svg" onClick={handleIconClick}>
      <FavIcon selected={isFavorite} />
    </div>
    </div>
  );
};

export default FavIconButton;







