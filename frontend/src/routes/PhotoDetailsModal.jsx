import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import FavIconButton from "components/FavIconButton";

// Functional component for the PhotoDetailsModal
const PhotoDetailsModal = (props) => {
  const { photoData, handleFavoriteToggle, favoritePhotos, handleCloseModal } =
    props;

    const toggleFavorite = () => {
      if (handleFavoriteToggle) {
        handleFavoriteToggle(photoData.id);
      }
    };
   
      const isFavorite = favoritePhotos.includes(photoData.id)
    
 // Returning the JSX structure for the PhotoDetailsModal component
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={handleCloseModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {photoData ? (
        <div >
          <div className="photo-details-modal__image">
            <FavIconButton
              isFavorite={isFavorite}
              onToggle={toggleFavorite}
            />
          <img
            src={photoData.urls.regular}
            className="photo-details-modal__image"
          /></div>
          <h3 className="photo-details-modal__header">Similar Photos</h3>
          <div className="photo-details-modal__images">
            {photoData.similar_photos ? (
              <PhotoList
                photos={Object.values(photoData.similar_photos)}
                onFavoriteToggle={handleFavoriteToggle}
                favoritePhotos={favoritePhotos}
              />
            ) : (
              <p>No similar photos available</p>
            )}
          </div>
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
