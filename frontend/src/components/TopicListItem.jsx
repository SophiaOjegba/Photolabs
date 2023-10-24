import React from "react";
import axios from 'axios';

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { data, setTopicPhotos } = props;

  const { title, id } = data;

  const getPhotos = (id) => {
    axios.get(`/api/topics/photos/${id}`).then(res => {
      setTopicPhotos(res.data)
    }).catch(error => console.log('error occured', error))
  }

  return (
    <div className="topic-list__item">
      <p className="topic-list__item span" onClick={()=> getPhotos(id)} >{title}</p>
    </div>
  );
};

export default TopicListItem;
