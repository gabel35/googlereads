import React from "react";
import SearchForm from "../SearchForm";

function Header(props){
  return (
    <div
      className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-2">Googlereads</h1>
        <h2 className="display-8">Search for and Save all your favorite books!</h2>
        <SearchForm search={props.filter} handleInputChange={props.handleInputChange} handleFormSubmit={props.handleFormSubmit} />
      </div>
    </div>       
    
  )
}

export default Header;

