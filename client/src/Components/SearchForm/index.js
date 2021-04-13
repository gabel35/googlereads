import React from "react";

function SearchForm(props) {
  return (
    <form className="d-flex">
      <input
        value={props.filter}
        onChange={props.handleInputChange}
        className="form-control"
        type="search"
        placeholder="Search any column"
      />
    </form>
  );
}

export default SearchForm;