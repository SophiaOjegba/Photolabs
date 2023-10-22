import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
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
        topics={topics}
        photos={photos}
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
