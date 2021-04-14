import React, { useEffect, useState } from "react";
import API from '../utils/API';
import { List, ListItem} from '../Components/List';
import Header from "../Components/Header";
import Container from "../Components/Container";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})
  
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.googleBooks()
      .then(res => {
        console.log(res)
        setBooks(res.data.items)
      })
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

    // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        id: formObject.id,
        image: formObject.image,
        title: formObject.title,
        authors: formObject.authors[0],
        description: formObject.description,
        link: formObject.link,
      })
        .then(res => loadBooks(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Header 
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        name="search"
      />
      <Container>
        {books.length ? (
          <List>
            {books.map((book, index) => (
              <ListItem key={index}>
                <img alt="book cover">{book.image}</img>
                <h2>{book.title} by {book.authors}</h2>
                <p>{book.description}</p>
                <a href={book.link} target="_blank" rel="nopener noreferrer">Go to Book</a>
              </ListItem>
            ))}
          </List>
        ): (
          <h3>No Results to Display</h3>
        )}
      </Container>
    </div>
  );
}

export default Search;
