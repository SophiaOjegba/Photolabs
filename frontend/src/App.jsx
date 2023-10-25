import React, { useEffect } from "react";
import axios from "axios";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "../src/hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
    setApplicationData,
    setTopicPhotos,
    searchPhotos
  } = useApplicationData();


  useEffect(() => {
    const topicsUrl = "/api/topics";
    const photosUrl = "/api/photos";
    Promise.all([axios.get(topicsUrl), axios.get(photosUrl)])
      .then((allResponse) => {
        const [topics, photos] = allResponse;
        setApplicationData(topics.data, photos.data)
      })
      .catch((error) => console.log("An error occured", error));
  }, []);

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        setTopicPhotos = {setTopicPhotos}
        searchPhotos = {searchPhotos}
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
