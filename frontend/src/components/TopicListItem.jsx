import React from "react";
import axios from 'axios';

import "../styles/TopicListItem.scss";

// Component for rendering a single topic item
const TopicListItem = (props) => {
  const { data, setTopicPhotos } = props;

  const { title, id } = data;

  // Function to get photos for a specific topic
  const getPhotos = (id) => {
    axios.get(`/api/topics/photos/${id}`).then(res => {
      setTopicPhotos(res.data)
    }).catch(error => console.log('error occured', error))
  }

    // Rendering the topic item
  return (
    <div className="topic-list__item">
      <p className="topic-list__item span" onClick={()=> getPhotos(id)} >{title}</p>
    </div>
  );
};

export default TopicListItem;
