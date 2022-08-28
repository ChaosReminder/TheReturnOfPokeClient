import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQPokes } from "../redux/actions";

const SearchBar = () => {
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    dispatch(getQPokes(name));
  };

  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Type here..."
        onChange={(e) => handleInputChange(e)}
      />
      <button className="searchButton">Search</button>
    </div>
  );
};

export default SearchBar;