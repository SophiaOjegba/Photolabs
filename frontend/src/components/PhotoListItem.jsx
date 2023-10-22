import React from "react";
import "../styles/PhotoListItem.scss";
import FavIconButton from "./FavIconButton";

const PhotoListItem = (props) => {
  const { data, onFavoriteToggle, favoritePhotos, handlePhotoClick } = props;
  const { urls, user, location } = data;
  const isFavorited = favoritePhotos && favoritePhotos.includes(data.id);
  const toggleFavorite = () => {
    if (onFavoriteToggle) {
      onFavoriteToggle(data.id);
    }
  };

  const handleClick = () => {
    if (handlePhotoClick) {
      handlePhotoClick(data);
    }
  };

  return (
    <div className="photo-list__item">
      <FavIconButton isFavorite={isFavorited} onToggle={toggleFavorite} />
      <img
        src={urls.regular}
        onClick={handleClick}
        className="photo-list__image"
      />
      <div className="photo-list__user-details ">
        <img src={user.profile} className="photo-list__user-profile" />
        <div>
          <p className="photo-list__user-info">{user.name}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
