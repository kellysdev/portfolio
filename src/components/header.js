const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="nav-brand" href="index.html">kelly scott</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#">portfolio</a>
            <a className="nav-link" href="#">resume</a>
            <a className="nav-link" href="#">about</a>
            <a className="nav-link" href="#">contact</a> 
          </div>
        </div>
      </div>    
    </nav>
  );
};

export default Header;