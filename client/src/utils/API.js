import axios from "axios";

export default {
    //the google api...//
//   googleBooks: function (query) {
//     return axios.get();
//   },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
