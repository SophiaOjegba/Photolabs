import React, { useState } from "react";
import axios from "axios";
import "../styles/SearchBar.scss";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const search = () => {
    axios
      .get(`/api/search?query=${searchQuery}`)
      .then((res) => {
        props.searchPhotos(res.data);
      })
      .catch((error) => console.log("An error occurred", error));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search city or country"
      />
      <button onClick={search} className="btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
