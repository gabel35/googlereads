import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link 
          to="/">
          Googlereads
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Search Books
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/saved"
                className={window.location.pathname === "/save" ? "nav-link active" : "nav-link"}
              >
                Saved Books
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Nav;
  