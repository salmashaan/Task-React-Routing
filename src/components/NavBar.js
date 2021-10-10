import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="https://www.pngitem.com/pimgs/m/119-1196430_cookie-clipart-logo-png-cookie-logo-png-transparent.png"
          alt="logo"
        />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/List">List</Link>
    </header>
  );
}

export default NavBar;