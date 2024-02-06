import {Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Nav.Link className="nav-brand" href="/">kelly scott</Nav.Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggle-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Nav.Link as={Link} to="/" className="nav-link">portfolio</Nav.Link>
            <Nav.Link as={Link} to="/resume" className="nav-link">resume</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">contact</Nav.Link> 
          </div>
        </div>
      </div>    
    </nav>
  );
};

export default Header;