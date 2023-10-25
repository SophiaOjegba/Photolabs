import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import SearchBar from './SearchBar'

import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {topics, favoritePhotos, setTopicPhotos, searchPhotos} = props
  const hasFavorites = favoritePhotos && favoritePhotos.length > 0;
  return (
    <div className="top-nav-bar">
      
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics = {topics} setTopicPhotos={setTopicPhotos}/>
      <FavBadge hasFavorites={hasFavorites}/>
      <SearchBar searchPhotos={searchPhotos}/>

    </div>
  )
}

export default TopNavigation;