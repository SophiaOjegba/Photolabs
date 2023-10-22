import { useReducer } from 'react';

const initialState = {
  favoritePhotos: [],
  selectedPhoto: false,
  isPhotoDetailsModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FAV_PHOTO_IDS':
      const updatedFavoritePhotos = state.favoritePhotos.includes(action.photoId)
        ? state.favoritePhotos.filter((id) => id !== action.photoId)
        : [...state.favoritePhotos, action.photoId];
      return { ...state, favoritePhotos: updatedFavoritePhotos };

    case 'SET_PHOTO_SELECTED':
      return { ...state, isPhotoSelected: action.isSelected };

    case 'CLOSE_PHOTO_DETAILS_MODAL':
      return { ...state, showModal: false };

    case 'OPEN_PHOTO_DETAILS_MODAL':
      return { ...state, showModal: true, selectedPhoto: action.selectedPhoto };

    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: 'UPDATE_FAV_PHOTO_IDS', photoId });
  };

  const setPhotoSelected = (isSelected) => {
    dispatch({ type: 'SET_PHOTO_SELECTED', isSelected });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'CLOSE_PHOTO_DETAILS_MODAL' });
  };

  const onOpenPhotoDetailsModal = (selectedPhoto) => {
    dispatch({ type: 'OPEN_PHOTO_DETAILS_MODAL', selectedPhoto });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
  };
};

export default useApplicationData;
