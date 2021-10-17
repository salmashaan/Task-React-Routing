import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import SubModal from "./SubModal";

function NavBar() {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="dark"
    >
      <Container>
        <img
          id="container"
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <Link to="/">
          <Navbar.Brand className="title-nav" href="#home">
            Home
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/List">
              <Nav.Link href="#movies">Movies</Nav.Link>
            </Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <NavDropdown title="Genres" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#subscribe">
              <SubModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

//

//<img
//   id="container"
//   className="logo"
//   src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
//   alt="logo"
// />
// </Link>
// <Link to="/" className="nav-item">
// Home
// </Link>
// <Link to="/List" className="nav-item">
// List
// </Link>

// <div className="navbar_main">
//<div className="netflix_logo">
//Link to="/">
//  <img
//  src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png"
//alt="neflix_logo"
//height="60px"
//></img>
//</Link>

//<div className="nav_right">
// UNLIMITED TV SHOWS & MOVIES
//<Link to="/List">
// {" "}
// <button className="btn btn-light">MOVIES</button>{" "}
//</Link>
//<Link to="/">
// <button className="btn btn-danger">SUBSCRIBE</button>
///</Link>
//</div>
//</div>
//</div>
