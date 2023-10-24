import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics, setTopicPhotos} = props
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((data, index) => (
        <TopicListItem key={index} data={data} setTopicPhotos={setTopicPhotos} />
      ))}
    </div>
  );
};

export default TopicList;
