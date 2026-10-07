import "../style/global.css"
export default function Navbar() {
  return (
  <header className="site-header">
    <nav className="navbar site-navbar">
        <div className="navbar-brand d-flex align-items-center gap-2 m-0">
          <i className="bi bi-0-circle fs-1"></i>
          <span className="brand-name">Goodspeed Publishing</span>
        </div>
        <div className="navbar-actions d-flex align-items-center">
          <a
            href="#contact"
            className="btn btn-lime btn-sm px-3 py-2 d-inline-flex align-items-center gap-2"
          >
            Book Free Consultation
            <i className="bi bi-arrow-right"></i>
          </a>
          <a href="#contact" className="btn btn-purple btn-sm px-3 py-2">
            Chat For 35% OFF
          </a>
        </div>
      </nav>
    </header>
  );
}