import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <form className="search-bar" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="How is the weather?"
        onChange={onInputChange}
        value={term}
      />
    </form>
  );
};

export default SearchBar;
