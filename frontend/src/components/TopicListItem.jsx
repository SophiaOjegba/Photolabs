import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { data } = props;
  const { title } = data;
  return (
    <div className="topic-list__item">
      <p className="topic-list__item span">{title}</p>
    </div>
  );
};

export default TopicListItem;
