import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
