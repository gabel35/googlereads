import React, { useEffect, useState } from "react";
import API from '../utils/API';
import { List, ListItem} from '../Components/List';
import Header from "../Components/Header";
import Container from "../Components/Container";

function Saved() {
  const [savedBooks, saveBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  function deleteGoogleBook(currentBook) {
    API.deleteBook( currentBook.id )
    .then(res => {
        console.log(res);
        API.getBooks();
    })
    .catch(err => {
        console.log(err);
    })
  }

  function getBooks() {
    API.getBooks()
    .then(res => {
      console.log("getBooks", res);
      saveBooks(res.data)
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <Header />
      <Container>
        {savedBooks.length ? (
          <List>
            {savedBooks.map(book => (
              <ListItem key={book._id}>
                <img alt="book cover">{book.imageLinks.thumbnail}</img>
                <h2>{book.title} by {book.authors[0]}</h2>
                <p>{book.description}</p>
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

export default Saved;