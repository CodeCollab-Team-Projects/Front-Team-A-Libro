import { useState } from "react";
import { Link } from "react-router-dom"; // React Router DOM
import "./Navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img
            src="https://i.ibb.co/5K6zzk9/open-book-line-icon-illustration-vector-removebg-preview-1.png"
            alt="Login Logo"
          />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className={`menu ${isOpen ? "open" : ""}`}>
          <Link to="/" className="logo logo__window">
            <img
              src="https://i.ibb.co/5K6zzk9/open-book-line-icon-illustration-vector-removebg-preview-1.png"
              alt="Login Logo"
            />
          </Link>
          <Link to="/books" className="menu-item" onClick={toggleMenu}>
            Libros
          </Link>
          <Link to="/discover" className="menu-item" onClick={toggleMenu}>
            Descubre
          </Link>
          <Link to="/books/read" className="menu-item" onClick={toggleMenu}>
            Tus libros
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
