import React from "react";
import axios from "axios";
const Search = ({ api, setWeather }) => {
  const [input, setInput] = React.useState("");
  const search = (evt) =>
    evt.key === "Enter"
      ? axios(
          `${api.base}weather?q=${input}&units=metric&APPID=${api.key}`
        ).then((res) => setWeather(res.data))
      : null;

  return (
    <input
      type="text"
      className="search-bar form-control w-25 m-auto bg-primary text-light mb-5"
      placeholder="Search..."
      onChange={(e) => setInput(e.target.value)}
      value={input}
      onKeyDown={search}
    />
  );
};

export default Search;
