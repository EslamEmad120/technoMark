import { Link } from "react-router-dom";
import logo from "./images/logoo.png"; // ✅ صححت المسار

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#7154CB" }}
    >
      <div className="container-fluid mx-3">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            style={{ width: "60px", height: "auto" }}
            alt="Logo"
            className="me-2"
          />
        </Link>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
