import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
