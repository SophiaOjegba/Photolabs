import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

// Component for rendering the top navigation bar
const TopNavigation = (props) => {
  const {topics, favoritePhotos, setTopicPhotos} = props
  const hasFavorites = favoritePhotos && favoritePhotos.length > 0;

   // Rendering the top navigation bar
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics = {topics} setTopicPhotos={setTopicPhotos}/>
      <FavBadge hasFavorites={hasFavorites}/>
    </div>
  )
}

export default TopNavigation;