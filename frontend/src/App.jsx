import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";

import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "../src/hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photoData={state.photoData}
        handlePhotoClick={onOpenPhotoDetailsModal}
        handleFavoriteToggle={updateToFavPhotoIds}
        favoritePhotos={state.favoritePhotos}
      />
      {state.showModal && (
        <PhotoDetailsModal
          handleCloseModal={onClosePhotoDetailsModal}
          photoData={state.selectedPhoto}
          handleFavoriteToggle={updateToFavPhotoIds}
          favoritePhotos={state.favoritePhotos}
        />
      )}
    </div>
  );
};

export default App;
