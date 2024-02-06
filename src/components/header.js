import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="md" className="navbar">
        <Navbar.Brand>kelly scott</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">portfolio</Nav.Link>
            <Nav.Link as={Link} to="/resume" className="nav-link">resume</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">about</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggle-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          </div>
        </div> */}   
    </Navbar>
  );
};

export default Header;