import { React, useState } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, onFavoriteToggle, favoritePhotos, handlePhotoClick } = props;

  return (
    <ul className="photo-list">
      {photos.map((data, index) => (
        <li key={index} className="photo-list:after">
          <PhotoListItem
            data={data}
            onFavoriteToggle={onFavoriteToggle}
            favoritePhotos={favoritePhotos}
            handlePhotoClick={handlePhotoClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
