import { useReducer } from "react";

// Initial state for the application data
const initialState = {
  favoritePhotos: [],
  selectedPhoto: false,
  isPhotoDetailsModalOpen: false,
  photoData: [],
  topicData: [],
  photosByTopic: [],
};

// Reducer function to handle state changes based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FAV_PHOTO_IDS":
      const updatedFavoritePhotos = state.favoritePhotos.includes(
        action.photoId
      )
        ? state.favoritePhotos.filter((id) => id !== action.photoId)
        : [...state.favoritePhotos, action.photoId];
      return { ...state, favoritePhotos: updatedFavoritePhotos };

    case "SET_PHOTO_SELECTED":
      return { ...state, isPhotoSelected: action.isSelected };

    case "CLOSE_PHOTO_DETAILS_MODAL":
      return { ...state, showModal: false };

    case "OPEN_PHOTO_DETAILS_MODAL":
      return { ...state, showModal: true, selectedPhoto: action.selectedPhoto };

    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };

    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };

    case "SET_PHOTOS_BY_TOPIC":
      return { ...state, photosByTopic: action.payload };

    case "SET_APPLICATION_DATA":
      return {...state, topicData: action.payload.topics, photoData: action.payload.photos};

    case "SET_TOPIC_PHOTOS":
      return {...state, photoData:action.payload}

    default:
      return state;
  }
};

// Custom hook for managing application data
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: "UPDATE_FAV_PHOTO_IDS", photoId });
  };

  const setPhotoSelected = (isSelected) => {
    dispatch({ type: "SET_PHOTO_SELECTED", isSelected });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_PHOTO_DETAILS_MODAL" });
  };

  const onOpenPhotoDetailsModal = (selectedPhoto) => {
    dispatch({ type: "OPEN_PHOTO_DETAILS_MODAL", selectedPhoto });
  };

  const setApplicationData = (topics, photos) => {
     dispatch({ type: "SET_APPLICATION_DATA", payload : {topics, photos}})
  }
  const setTopicPhotos = (topicPhotoData) => {
    dispatch ({type: "SET_TOPIC_PHOTOS", payload : topicPhotoData})
  }

  // Returning the required state and functions from the hook
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onOpenPhotoDetailsModal,
    setApplicationData,
    setTopicPhotos
  };
};

export default useApplicationData;
