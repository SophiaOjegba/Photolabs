import { React, useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    setTopicPhotos,
    handlePhotoClick,
    handleFavoriteToggle,
    favoritePhotos,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotos={favoritePhotos} setTopicPhotos={setTopicPhotos} />
      <PhotoList
        photos={photos}
        onFavoriteToggle={handleFavoriteToggle}
        favoritePhotos={favoritePhotos}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
